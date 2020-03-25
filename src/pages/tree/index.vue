<template>
    <div class="tree">
        <div class="choose-date" @click="showModel">选择日期1</div>
        <div  :class="{'zan-dialog-show' :popupVisible}">
            <div class="popup" v-if="popupVisible" @click="closeModel">
            </div>
            <div class="popup-wraper service-popup-wraper">
                <div class="po-rela">
                    <div class="popup-fixed-title">
                        <div class="blue" @click="closeModel">关闭</div>
                        <div>日期选择</div>
                        <div class="blue" @click="reset">清空</div>
                    </div> 
                    <div class="popup-fixed-dateNum">
                        <div class="ruzhu-date">
                            <span>入住时间</span>
                            <p class="checkInTime">{{checkInTime}}</p>
                        </div>
                        <div class="date-num">
                            共<span>{{num}}</span>晚
                        </div>
                        <div class="tuifang-date">
                            <span>退房时间</span>
                            <p class="checkOutTime">{{checkOutTime}}</p>
                        </div>
                    </div> 
                    <div class="weekday">
                        <div class="weekday-item" v-for="item in weekday" :key="item">{{item}}</div>
                    </div>
                    <!-- <div class="change-month">
                        <span @click="prevMonth">prev</span>
                        <span>{{dateArray[fistIndex].month}}</span>
                        <span @click="nextMonth">next</span>
                    </div> -->
                    <!-- <date-component :daysArray="dateArray[fistIndex]" @chooseDate="getChooseDate" @nochoose="noChoose"></date-component> -->
                    <div class="dateArray-wrapper">
                        <div v-for="(item,index) in dateArray" :key="index">
                            <p class="dateArray-wrapper-month">{{item.month}}</p>
                            <div class="days-content">
                                <div class="days-item" v-for="(child,childIndex) in item.days" 
                                    :key="childIndex" 
                                    @click="chooseTime(child)" 
                                    :class="[child.isFirstDay===true?'check-in-day':'',child.isEndDay===true?'check-out-day':'',child.ischeckd===true?'choose-date-day':'']"
                                    :style="{marginLeft:child.marginleft}">
                                    <span v-if="child.full===true && child.afterToday==true" class="red">满房</span>
                                    <span v-else :class="[child.afterToday==true?'is-afterToday':'not-afterToday']">{{childIndex+1}}</span>
                                    <span v-if="child.afterToday==true && child.isFirstDay!=true && child.isEndDay!=true" class="span-day-price">￥{{child.price}}</span>
                                    <span v-else-if="child.afterToday==true && child.isFirstDay==true">入住</span>
                                    <span v-else-if="child.afterToday==true && child.isEndDay==true">退房</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ebooking" v-if="btnVisiby" @click="booking">{{yuding}}</div>
                    <div class="ebooking-error" v-if="!btnVisiby">{{errorText}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dateComponent from "@/components/date-component";
import util from "../../utils/util"
import {getBetweenDateStr} from '../../utils/computedDate'
export default {
    components:{
        dateComponent
    },
    data(){
        return{
            popupVisible:false,
            checkInTime:"请选择",
            checkOutTime:"请选择",
            weekday:["日","一","二","三","四","五","六"],
            dateList:[],
            fistIndex:0,
            totalPrice:0,
            btnVisiby:true,
            num:0,
            yuding:"立即预定",
            errorText:"您所选的日期包含满房日期",
            dateArray:[
                {
                    month:"2020年3月",
                    days:[
                        {date:"2020/03/01",price:"323"}, {date:"2020/03/02",price:"323"},{date:"2020/03/03",price:"323"}, {date:"2020/03/04",price:"323"}, {date:"2020/03/05",price:"323"},
                        {date:"2020/03/06",price:"323",full:true}, {date:"2020/03/07",price:"323"}, {date:"2020/03/08",price:"323"}, {date:"2020/03/09",price:"323"}, {date:"2020/03/10",price:"323"},
                        {date:"2020/03/11",price:"323"}, {date:"2020/03/12",price:"323",full:true}, {date:"2020/03/13",price:"323",full:true}, {date:"2020/03/14",price:"323"},{date:"2020/03/15",price:"323"},
                        {date:"2020/03/16",price:"323"}, {date:"2020/03/17",price:"323"}, {date:"2020/03/18",price:"323"}, {date:"2020/03/19",price:"323"},{date:"2020/03/20",price:"323"},
                        {date:"2020/03/21",price:"323"},{date:"2020/03/22",price:"323"},{date:"2020/03/23",price:"323",full:true},{date:"2020/03/24",price:"323"},{date:"2020/03/25",price:"323"},
                        {date:"2020/03/26",price:"323"},{date:"2020/03/27",price:"323"},{date:"2020/03/28",price:"323"},{date:"2020/03/29",price:"323"},{date:"2020/03/30",price:"323"},{date:"2020/03/33",price:"323"}
                    ]
                },
                {
                    month:"2020年4月",
                    days:[
                        {date:"2020/04/01",price:"323"}, {date:"2020/04/02",price:"323"},{date:"2020/04/03",price:"323"}, {date:"2020/04/04",price:"323"}, {date:"2020/04/05",price:"323"},
                        {date:"2020/04/06",price:"323",full:true}, {date:"2020/04/07",price:"323"}, {date:"2020/04/08",price:"323"}, {date:"2020/04/09",price:"323"}, {date:"2020/04/10",price:"323"},
                        {date:"2020/04/11",price:"323"}, {date:"2020/04/12",price:"323",full:true}, {date:"2020/04/13",price:"323",full:true}, {date:"2020/04/14",price:"323"},{date:"2020/04/15",price:"323"},
                        {date:"2020/04/16",price:"323"}, {date:"2020/04/17",price:"323"}, {date:"2020/04/18",price:"323"}, {date:"2020/04/19",price:"323"},{date:"2020/04/20",price:"323"},
                        {date:"2020/04/21",price:"323"},{date:"2020/04/22",price:"323"},{date:"2020/04/23",price:"323",full:true},{date:"2020/04/24",price:"323"},{date:"2020/04/25",price:"323"},
                        {date:"2020/04/26",price:"323"},{date:"2020/04/27",price:"323"},{date:"2020/04/28",price:"323"},{date:"2020/04/29",price:"323"},{date:"2020/0430",price:"323"}
                    ]
                },
                {
                    month:"2020年5月",
                    days:[
                        {date:"2020/05/01",price:"323"}, {date:"2020/05/02",price:"323"},{date:"2020/05/03",price:"323"}, {date:"2020/05/04",price:"323"}, {date:"2020/05/05",price:"323"},
                        {date:"2020/05/06",price:"323"}, {date:"2020/05/07",price:"323"}, {date:"2020/05/08",price:"323"}, {date:"2020/05/09",price:"323"}, {date:"2020/05/10",price:"323"},
                        {date:"2020/05/11",price:"323"}, {date:"2020/05/12",price:"323"}, {date:"2020/05/13",price:"323"}, {date:"2020/05/14",price:"323"},{date:"2020/05/15",price:"323"},
                        {date:"2020/05/16",price:"323"}, {date:"2020/05/17",price:"323"}, {date:"2020/05/18",price:"323"}, {date:"2020/05/19",price:"323"},{date:"2020/05/20",price:"323"},
                        {date:"2020/05/21",price:"323"},{date:"2020/05/22",price:"323"},{date:"2020/05/23",price:"323"},{date:"2020/05/24",price:"323"},{date:"2020/05/25",price:"323"},
                        {date:"2020/05/26",price:"323"},{date:"2020/05/27",price:"323"},{date:"2020/05/28",price:"323"},{date:"2020/05/29",price:"323"},{date:"2020/05/30",price:"323"}
                    ]
                }
            ],
            allDays:[],
            startDay:"",
            endDay:"",
            today:""
        }
    },
    onShow(){
        this.getAllDates();
    },
    
    methods:{
        chooseTime(item){
            if(new Date(item.date).getTime()< new Date(this.today).getTime()){
                return
            }else{
                if(this.startDay===""){
                    this.startDay=item.date;
                    //wx.setStorageSync('hotelFirstDate', item.date)
                    item.isFirstDay=true;
                }else if(this.startDay!=""  && this.startDay!==item.date && this.endDay===""){ //已经有起始时间 第二次点击的时间不等于起始时间
                    if(new Date(item.date).getTime()>new Date(this.startDay).getTime()){ // 如果第二个时间大于起始时间
                        this.endDay=item.date;
                        item.isEndDay=true;
                        item.isFirstDay=false;
                        item.ischeckd=false;
                        let timeSection=getBetweenDateStr(this.startDay,this.endDay);
                        let emitArr=JSON.parse(JSON.stringify(timeSection));
                        console.log(emitArr);
                        emitArr.pop();
                        emitArr.shift();
                        console.log(emitArr);
                        for(let i=0;i<this.dateArray.length;i++){
                            console.log(i);
                            for(let j=0;j<this.dateArray[i].days.length;j++){
                                if(emitArr.includes(this.dateArray[i].days[j].date)){
                                    console.log(this.dateArray[i].days[j]);
                                    this.dateArray[i].days[j].isFirstDay=false
                                    this.dateArray[i].days[j].isEndDay=false
                                    this.dateArray[i].days[j].ischeckd=true
                                }else{
                                    this.dateArray[i].days[j].ischeckd=false
                                }
                            }
                        }
                        this.getChooseDate(timeSection);
                    }else{  // 如果第二个时间小于起始时间
                        // if(this.startDay.substring(0,7)!==item.date.substring(0,7)){  // 没在同一个月
                            this.endDay=this.startDay;
                            this.startDay=item.date;
                            item.isEndDay=false;
                            item.isFirstDay=true;
                            item.ischeckd=false;
                            let timeSection=getBetweenDateStr(this.startDay,this.endDay);
                            let emitArr=JSON.parse(JSON.stringify(timeSection));
                            console.log(emitArr);
                            emitArr.pop();
                            emitArr.shift();
                            console.log(emitArr);
                            for(let i=0;i<this.dateArray.length;i++){
                                console.log(i);
                                for(let j=0;j<this.dateArray[i].days.length;j++){
                                    if(this.dateArray[i].days[j].date==this.endDay){
                                        this.dateArray[i].days[j].isFirstDay=false
                                        this.dateArray[i].days[j].isEndDay=true
                                        this.dateArray[i].days[j].ischeckd=false
                                    }
                                    if(emitArr.includes(this.dateArray[i].days[j].date)){
                                        console.log(this.dateArray[i].days[j]);
                                        this.dateArray[i].days[j].isFirstDay=false
                                        this.dateArray[i].days[j].isEndDay=false
                                        this.dateArray[i].days[j].ischeckd=true
                                    }else{
                                        this.dateArray[i].days[j].ischeckd=false
                                    }
                                }
                            }
                            this.getChooseDate(timeSection);
                        //}
                    }
                }else if(this.startDay!=="" && this.startDay===item.date && this.endDay===""){ //已经有起始时间 第二次点击的时间等于起始时间并且没有结束时间
                    this.startDay="";
                    item.isEndDay=false;
                    item.isFirstDay=false;
                    item.ischeckd=false;
                    this.yuding="立即预定";
                }else if(this.startDay!=="" && this.endDay!=="" ){
                    for(let i=0;i<this.dateArray.length;i++){
                        for(let j=0;j<this.dateArray[i].days.length;j++){
                            this.dateArray[i].days[j].isFirstDay=false
                            this.dateArray[i].days[j].isEndDay=false
                            this.dateArray[i].days[j].ischeckd=false
                        }
                    }
                    this.startDay=item.date;
                    this.endDay="";
                    item.isFirstDay=true;
                    this.yuding="立即预定";
                }
            }
        },
        reset(){
            wx.removeStorageSync("hotelChooseDate");
            wx.removeStorageSync("hotelFirstDate");
            this.checkInTime="";
            this.checkOutTime="";
            this.btnVisiby=true;
            this.yuding="立即预定";
            this.totalPrice=0;
            this.num=0;
            this.dateList=[];
            for(let i=0;i<this.dateArray.length;i++){
                let _item=this.dateArray[i].days;
                for(let j=0;j<_item.length;j++){
                    _item[j].isEndDay=false;
                    _item[j].isFirstDay=false;
                    _item[j].ischeckd=false;
                }
            }
        },
        getChooseDate(data){
            console.log(data);
            let arr=data;
            this.totalPrice=0;
            if(Array.isArray(arr)){
                this.num=data.length-1;
                this.checkInTime=data[0];
                this.checkOutTime=data[data.length-1];
                this.dateList=JSON.parse(JSON.stringify(arr));
                let getlist=JSON.parse(JSON.stringify(arr));
                getlist.pop();
                for(let i=0;i<this.allDays.length;i++){
                    if(getlist.includes(this.allDays[i].date) && this.allDays[i].full!==true){
                        this.totalPrice+=this.allDays[i].price*1;
                    }else if(getlist.includes(this.allDays[i].date) && this.allDays[i].full===true){
                        this.btnVisiby=false;
                        this.totalPrice=0;
                        return
                    }
                }
                console.log(this.totalPrice);
                if(this.totalPrice===0){
                    this.btnVisiby=false;
                    this.yuding="立即预定";
                }else{
                    this.btnVisiby=true;
                    this.yuding="￥"+this.totalPrice+" 立即预定"
                }
            }
        },
        booking(){
            if(this.dateList.length!==0){
                console.log(this.dateList);
                console.log(this.totalPrice);
            }else{
                util.showErrorToastMessage("请选择入住日期");
                return
            }
        },
        showModel(){
            this.popupVisible=!this.popupVisible;
        },
        closeModel(){
            this.popupVisible=false;
        },
        noChoose(){
            this.yuding="立即预定";
        },
        getAllDates(){
            let week=["日","一","二","三","四","五","六"];
            let today=new Date().getFullYear()+"/"+(new Date().getMonth()+1)+ "/"+  new Date().getDate();
            this.today=today
            let _list=this.dateArray;
            for(let i=0;i<_list.length;i++){
                let _item=_list[i].days;
                let _monthF=_item[0];
                let firstDay=new Date(Date.parse(_monthF.date));
                let firstWeek=firstDay.getDay();  // 获取每月第一天是星期几
                _list[i].days[0].marginleft=firstWeek*100+"rpx";
                for(let j=0;j<_item.length;j++){
                    if(new Date(_item[j].date).getTime()>= new Date(today).getTime()){
                        _item[j].afterToday=true
                        _item[j].isFirstDay=false
                        _item[j].isEndDay=false
                    }else{
                         _item[j].afterToday=false
                    }
                }
            }
            this.dateArray=_list;
            for(let i=0;i<this.dateArray.length;i++){
                this.allDays.push(...this.dateArray[i].days);
            }
            //console.log(this.allDays);
        },
        nextMonth(){
            if(this.fistIndex===this.dateArray.length-1){
                this.fistIndex=this.dateArray.length-1
            }else{
                this.fistIndex= this.fistIndex+1;
            }
        },
        prevMonth(){
            if(this.fistIndex>0){
                this.fistIndex=this.fistIndex-1*1
            }else{
                this.fistIndex=0
            }
        },
    }
}
</script>
<style lang="stylus" scoped>
.tree{
    width 100%;
    min-height:100vh;
    background-color #f2f2f2;
    .choose-date{
        width 100%
        height  80rpx
        line-height 80rpx
        text-align center
        color #333
        font-size 28rpx
        border-top 1rpx solid #dddddd
        border-bottom 1rpx solid #ddd
    }
}
.check-in-day .is-afterToday{
    color #fff
}
.check-out-day .is-afterToday{
    color #fff
}
.blue{
    color:rgba(0,162,234,1) !important;
}
.is-afterToday{
    font-size:28rpx;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(85,85,85,1);
}
.not-afterToday{
    font-size:28rpx;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(204,204,204,1);
}
.red{
    font-size:28rpx;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(224,63,63,1);
}
.span-day-price{
    font-size:20rpx;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(153,153,153,1);
    margin-top 8rpx
}
.dateArray-wrapper{
    height 700rpx
    overflow-y scroll
}
.days-content{
    display: flex;
    flex-flow: row wrap;
    width 750rpx
    min-height 400rpx
    font-size:24rpx
}
.dateArray-wrapper-month{
    text-align center
    font-size:24rpx;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(77,77,77,1)
    line-height:32rpx;
    margin-top 10rpx
}
.days-item{
    width: 107rpx
    height 100rpx
    display flex
    flex-flow column nowrap
    align-items center
    justify-content center
}
.choose-date-day{
    background:#D9F1FC;
    color #fff
}
.check-out-day{
    color #fff
    background-color #D9F1FC
    background-repeat no-repeat
    background-size cover
    background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAFIklEQVR4Xu3dQWwUVRgH8P+brmHbeYUoCF5IrJ5U5KZFb4IXkhYvpIJX8aj1wIV6pV7BazGBGHbesgdj8WgxnqR6qmI9KZwIZd5OMWmTmrIzn5mttd10d9/MvJk9OF+v+/7fl/3lddtOv3kjkOGr2lgZq7Sci0Q4LQSOAqhkKPN/j6xBYBnCqa07B+cwJTbjNyzSvmupgrNE4Q0BuGmzJV6/FFaciY2pQw9TgY+qx28TiR8APFNivKxvfWm98vx4KnBX6Z8F0RtZO5Y+5zgfJwaXN4NX4YTLpUezARBYTAzu1oNpEYVXbfpxFmvJwT19W4AmGc1OIBl4g4ZkS68C2G/XjtOJwIfrwYmhKLzLXPYCicCl538G4LJ9O66QEFzfAegkc9kLmMGvU9Xd5z8REFX7dlzBCO6q5ilB0QJT5SNgBJeqOQuKZvJpx1WM4K7Si4JonKnyEegL/mxj9cDTVtgEiC+/5uPd//LsiNJnHKL5nHpxGdP1cOk1rwLRNEvlJ9D3I0Uq/x4Ix/Jrx5V6grve4yMC4pHpu4AJ0wn0AdfnBchLV45XmwR6gktPXwPogqkAv55OoPcOV/59QRhLV45XmwS6glcbf41VWpv3TWF+Pb1AV/BRT18g0LX05ThhEugKLj3tAXTeFObX0wv0APdXABxJX44TJoE94LK+egxR654pyK9nE9gD7tb8aSHA4xDZPI2pvTtc6XkQnTEmeUEmgU7weBwibAYgOpCpGoeMAh3gw6o5PkTRojHFCzILdICPKn+GCLOZq3HQKNABLpVeANEpY4oXZBbYAW+PQ+hVAQxnrsZBo8B/4NJrngSiO8YEL7AS2AFX/iwIPA5hxWkO7wa/C8IJc4RX2Ai0wZ+7GezfdKKAxyFsKJNl2+Ajt/SkE9LtZBFeZSPQBpeeH1874XEIG8mE2W3wXwG8njDDyywEBI9DWOhliApZ1+cQkcqQ5UgGAcHjEBnULCJCev6fAF6yqMHRFAJCKv8PEF5OkeGlFgLxR8ocQB9Z1OBoCoF4h78PQj1FhpdaCAj51cphVJx4LMJ4+4lFH47+K7D9h88vAI6zSvEC2+BXAHxafDvusHXxqq4nnIi+ZY7iBXZdng0DPixsQOBxG+n5PwJ4q/iW5e6w63+afnxaRHxqBH8VKLADfku/g5C+L7AXl+743fv6g6q7z+UxiYK3RecgkKe/A+jdgnuWunznqJvnXyLg81KLFPzmO4c5G803h1rRTwX3LHX5vePKLR3/Ps7jygVti24D+d+A6L2C+pW+bBdw/xMQvii9TEEAe8G94DUg/K2gfqUv2/22QeU/AuGF0usUANADXNdA9EEB/Upfsiv4iPI/dAhfll6nAICu4FX15MUKPX1QQL/Sl+z5f0yeVylmb/QGV3oOxOMTebP3Bq/pcxA8czg48K/XDuPvDR6fyFm87yyK9HyeGx8wON8ZMUjwEU9POuB7f/I07/uRsnV3G49PDAw8biSVz/dv5ihuHOCUXvMyEPH4RE7oScD5HvycsOMyRnDw+ESO3EnA48/xml6A4HNU8pA373AAozV/hgSfFDQwcD4LKw/qrRqJdjj4tLfcxJOBt8eZ9TzA5xnayicG5xM7banb+eQPMJX15iuIot9zaVvWImke0Rsb8UOoLXdKmodQx634MetW4Okfs751MSs4SxTeEIBr1b5c4aWw4kxsTB16mPiH5m6famNlrNJyLpLAaUE4yne/dd09axBYhnBq687BOUyJzXjVP+D1iTbSrEUvAAAAAElFTkSuQmCC")

}
.check-in-day{
    color #fff
    background-color #D9F1FC
    background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAD1ElEQVR4Xu3dsU7bQBwG8O8ShISUikqpk4HSrRNLB4ZCO/QBWJsSh7WwVB3gPWDoSEdEq9CRF+hS2oqNJ6igAzQMYFspAnyVAYPr2PEB+d/0MUX47zvp59NZXxzfKcR/bT1cCQ/nocMWNCYAPLg+xg9pAR/ADqDXfG93FQuTp6ZEKiocaXfGymfhJoBnpiey7lJAA9uAngnc+r6JiUI0ss/+/CC2CVd2jYb6GXi/XpqMdFX53HmHMPxw9+54ZiSgSuqtN+t8LNJQlU8HW9B4XlTI40UC6qvvOq8KqyrrB8e8QRYxFR/XwEnQORrF+6cn/apVZf1AFzfHChMBBT3tufUtgptoDaBGQy0FrrNM8AFgGjWhsOE3aw2CG2kNpGjPd2vjBB+IpVkj52F5vDtX3cur5k3TzNG8qlRu+LPVDYKbk92rUim94jXriwS/F+OtTt7y3do0wW9ldvfiogDEOfzutrln9gtABBcA10otBk1nJatpgguAo08AIrgEOJAbgAguA468AERwIXBoNPxWrScAEVwIPC8AEVwIHEBmACK4ELiGPgk6xz1PgAguBB41e14qT3Vnq9+TXRBcEDwrABFcEDwrABFcEjwjABFcFrwnABFcGDwdgAguDJ4OQAQXBk8HIIILg6cDEMGFwdMBiOAWwJMBiOAWwJMBiOAWwDXUbuA6T6KuCG4B/GIev/oJHMEtgccBiOCWwBXUsuc6SwS3BB4HIIJbAo8DEMEtgccBiOAWwaMARHCL4IBqE9wieBSACE5wiwL2u+KUYtNca940bXpH36dMcQ63RK6Bv8GQM0pwS+BQ+OY3ay8IbglcQS97bp1fXlnyBlT5td+sfuEItyR+PlR63G08+k1wC+B8xGYBOdVF23drb/hM0xJ8FHiC1uWLspxSLKBHgac7d/kmBMGFwS8CT+foYbzaG8GFwfljTnng/3qIn9bH/+QIl74AV4GH4NLQV+2n37nnCBeETwYejnBB6JumVdt3nYvAQ3AL4MnAQ3AL4MnAQ3BhcC5uIAyc0TyX77Bpng48nFKk9VOBh+DC4FxkTBg42XxW4OEIF70AvYGH4ILgXApVEDer6ay1rjjChS5CXuAhuBB43nqFBBcCzws8BBcCz1tzluBC4NxWRgg2q9l+gYcjXORC5AcegguA9ws8BBcA7xd4kuDcwHQA+EWB5wacW/QOgDtqwnSLXm5CPRBw402ouc36/b1vtc161N1IuzNWPgs3ubf97fE1sA3omcCt75ucra6L2nq4Eh7OQ4ctaExwJ/C+fD6AHUCv+d7uKhYmT02wo5p/AH5Q53z0Rt8AAAAASUVORK5CYII=")
    background-repeat no-repeat
    background-size cover
}
.popup{
    width: 100%;
    height:100%;
    position: absolute;
    z-index: 99;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
}
.popup-wraper{
    position: fixed;
    left: 0;
    bottom: 0;
    min-height: 800rpx;
    width: 750rpx;
    padding 25rpx 0 0 0;
    background: #fff;
    z-index: 999;
    transform: translateY(150%);  
    transition: all 0.4s ease; 
    color #666
    .po-rela{
        position relative
        min-height: 800rpx;
        max-height 1400rpx
        overflow-y: scroll;
    }
}
.zan-dialog-show .popup-wraper{
     transform: translateY(0);
  }
.popup-fixed-title{
    display  flex
    flex-flow row nowrap;
    justify-content space-between
    font-size 28rpx
    padding 0 25rpx
    .blue{
        color #2f86f7;
    }
}
.popup-fixed-dateNum{
    display flex
    flex-flow row nowrap
    justify-content space-around
    margin 28rpx 0;
    font-size 28rpx
    align-items center
    .ruzhu-date{
        display flex
        flex-flow column nowrap
        justify-content center
        align-items center
        .checkInTime{
            font-size 26rpx
            color #333
        }
    }
    .tuifang-date{
        display flex
        flex-flow column nowrap
        justify-content center
        align-items center
        .checkOutTime{
            color #333
            font-size 26rpx
        }
    }
    .date-num{
        border 1rpx solid #ddd
        height 48rpx
        display flex
        flex-flow row nowrap
        align-items center
        padding 0 32rpx
        border-radius 24rpx
    }
}
.weekday{
    display flex
    flex-flow row nowrap
    justify-content space-between
    position relative
    padding-bottom 16rpx
    width 670rpx
    margin-left 40rpx
    font-size:28rpx;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(204,204,204,1);
    &:after{
        position absolute
        content ""
        bottom 0
        z-index 999
        left -25rpx
        right -25rpx
        height 2rpx
        -webkit-transform: scaleY(.5);
        transform:scaleY(.5);
        background-color #ddd
    }
    .weekday-item:first-child{
        color cadetblue
    }
    .weekday-item:last-child{
        color cadetblue
    }
}
.change-month{
    display flex
    flex-flow row nowrap
    justify-content space-between
    margin 20rpx
    font-size 28rpx
}
.ebooking{
    width 100%;
    height  80rpx;
    position absolute
    line-height 80rpx
    text-align center
    font-size 34rpx
    background:rgba(0,162,234,1);
    position: absolute;
    z-index 999
    bottom: 2rpx;
    color: #fff;
}
.ebooking-error{
    width 100%;
    height  80rpx;
    position absolute
    line-height 80rpx
    text-align center
    font-size 34rpx
    background-color #d1d1d1
    position: absolute;
    z-index 999
    bottom: 2rpx;
    color: #fff;
}
</style>


