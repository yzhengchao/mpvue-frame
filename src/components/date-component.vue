<template>
    <div class="dateComponent">
        <div class="day-item" v-for="(item,index) in daysArray.days" 
        @click="chooseTime(item,$event)" 
        :class="[item.isFirstDay===true?'check-in-day':'',item.isEndDay===true?'check-out-day':'',item.ischeckd===true?'choose-date':'']" 
        :key="index" 
        :style="{marginLeft:item.marginleft}">
            <span v-if="item.full===true" class="red">满房</span>
            <span v-else>{{index+1}}</span>
            <span v-if="item.afterToday==true && item.isFirstDay!=true && item.isEndDay!=true" >{{item.price}}</span>
            <span v-else-if="item.afterToday==true && item.isFirstDay==true">入住</span>
            <span v-else-if="item.afterToday==true && item.isEndDay==true">退房</span>
        </div>
    </div>
</template>
<script>
    import {getBetweenDateStr} from '../utils/computedDate'
    export default {
        props:{
            daysArray:{
                type:Object
            }
        },
        data(){
            return{
                days:this.daysArray,
                monthDays:this.daysArray.days,
                today:"",
                startDay:"",
                endDay:""
            }
        },
        methods:{
            init(){
                console.log("init 事件");
                let week=["日","一","二","三","四","五","六"];
                let firstDay=new Date(Date.parse(this.daysArray.days[0].date));
                console.log(firstDay.getDay());
                let firstWeek=firstDay.getDay();
                let today=new Date().getFullYear()+"/"+(new Date().getMonth()+1)+ "/"+  new Date().getDate();
                this.today=today;
                console.log(today);
            },
            chooseTime(item,e){
                console.log(item);
                console.log(e);
                if(new Date(item.date).getTime()< new Date(this.today).getTime()){
                    return
                }else{
                    if(this.startDay===""){
                        this.startDay=item.date;
                        wx.setStorageSync('hotelFirstDate', item.date)
                        item.isFirstDay=true;
                    }else if(this.startDay!=""  && this.startDay!==item.date && this.endDay===""){ //已经有起始时间 第二次点击的时间不等于起始时间
                        if(new Date(item.date).getTime()>new Date(this.startDay).getTime()){  // 如果第二个时间大于起始时间
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
                            for(let i=0;i<this.daysArray.days.length;i++){
                                if(emitArr.includes(this.daysArray.days[i].date)){
                                    // this.$set(this.daysArray.days[i], "isFirstDay", false);
                                    // this.$set(this.daysArray.days[i], "isEndDay", false);
                                    // this.$set(this.daysArray.days[i], "ischeckd", true);
                                    this.daysArray.days[i].isFirstDay=false;
                                    this.daysArray.days[i].isEndDay=false;
                                    this.daysArray.days[i].ischeckd=true;
                                }else{
                                    //this.$set(this.daysArray.days[i], "ischeckd", false);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                    this.daysArray.days[i].ischeckd=false;
                                }
                            }
                            //wx.setStorageSync("hotelChooseDate",JSON.stringify(emitArr));
                            this.$emit("chooseDate",timeSection);
                            wx.setStorageSync("hotelChooseDate",emitArr);
                        }else{ // 如果第二个时间小于起始时间
                            wx.setStorageSync('hotelFirstDate', item.date)
                            console.log(this.startDay);
                            // 判断是否在同一个月
                            if(this.startDay.substring(0,7)!==item.date.substring(0,7)){  // 没在同一个月
                                this.endDay=this.startDay;
                                this.startDay=item.date;
                                console.log(this.startDay,this.endDay);
                                item.isEndDay=false;
                                item.isFirstDay=true;
                                item.ischeckd=false;
                                let timeSection=getBetweenDateStr(this.startDay,this.endDay);
                                let emitArr=JSON.parse(JSON.stringify(timeSection));
                                console.log(emitArr);
                                emitArr.pop();
                                emitArr.shift();
                                console.log(emitArr);
                                for(let i=0;i<this.daysArray.days.length;i++){
                                    if(emitArr.includes(this.daysArray.days[i].date)){
                                        this.daysArray.days[i].isFirstDay=false;
                                        this.daysArray.days[i].isEndDay=false;
                                        this.daysArray.days[i].ischeckd=true;
                                        // this.$set(this.daysArray.days[i], "isFirstDay", false);
                                        // this.$set(this.daysArray.days[i], "isEndDay", false);
                                        // this.$set(this.daysArray.days[i], "ischeckd", true);
                                    }else{
                                        this.daysArray.days[i].ischeckd=false;
                                        //this.$set(this.daysArray.days[i], "ischeckd", false);
                                    }
                                }
                                this.$emit("chooseDate",timeSection);
                                wx.setStorageSync("hotelChooseDate",JSON.stringify(emitArr));
                            }else{   // 在同一个月
                                this.endDay=this.startDay;
                                this.startDay=item.date;
                                console.log(this.startDay,this.endDay);
                                //let _days=this.monthDays;
                                console.log(this.daysArray.days);
                                for(let i=0;i<this.daysArray.days.length;i++){
                                    if(this.daysArray.days[i].date==this.endDay){
                                        console.log(this.daysArray.days[i].isFirstDay);
                                        //this.$set(this.daysArray.days[i], "isFirstDay", false);
                                        //this.$set(this.daysArray.days[i], "isEndDay", true);
                                        this.daysArray.days[i].isFirstDay=false;
                                        this.daysArray.days[i].isEndDay=true;
                                    }
                                }
                                console.log(this.daysArray.days);
                                //this.monthDays=_days;
                                item.isEndDay=false;
                                item.isFirstDay=true;
                                item.ischeckd=false;
                                let timeSection=getBetweenDateStr(this.startDay,this.endDay);
                                let emitArr=JSON.parse(JSON.stringify(timeSection));
                                emitArr.pop();
                                emitArr.shift();
                                console.log(emitArr);
                                for(let i=0;i<this.daysArray.days.length;i++){
                                    if(emitArr.includes(this.daysArray.days[i].date)){
                                        //this.$set(this.daysArray.days[i], "isFirstDay", false);
                                        //this.$set(this.daysArray.days[i], "isEndDay", false);
                                        //this.$set(this.daysArray.days[i], "ischeckd", true);
                                        this.daysArray.days[i].isFirstDay=false;
                                        this.daysArray.days[i].isEndDay=false;
                                        this.daysArray.days[i].ischeckd=true;
                                    }else{
                                        //this.$set(this.daysArray.days[i], "ischeckd", false);
                                        this.daysArray.days[i].ischeckd=false;
                                    }
                                }
                                this.$emit("chooseDate",timeSection);
                                wx.setStorageSync("hotelChooseDate",JSON.stringify(emitArr));
                            }
                        }
                    }else if(this.startDay!=="" && this.startDay===item.date && this.endDay===""){ //已经有起始时间 第二次点击的时间等于起始时间并且没有结束时间
                        this.startDay="";
                        wx.removeStorageSync("hotelChooseDate");
                        wx.removeStorageSync("hotelFirstDate");
                        item.isEndDay=false;
                        item.isFirstDay=false;
                        item.ischeckd=false;
                        this.$emit("nochoose","0");
                    }else if(this.startDay!=="" && this.endDay!=="" ){  // 已有起始时间 结束时间，第三次点击
                        for(let i=0;i<this.daysArray.days.length;i++){
                            //this.$set(this.daysArray.days[i], "isFirstDay", false);
                            //this.$set(this.daysArray.days[i], "isEndDay", false);
                            //this.$set(this.daysArray.days[i], "ischeckd", false);
                            this.daysArray.days[i].isFirstDay=false;
                            this.daysArray.days[i].isEndDay=false;
                            this.daysArray.days[i].ischeckd=false;
                        }
                        this.startDay=item.date;
                        this.endDay="";
                        item.isFirstDay=true;
                        wx.removeStorageSync("hotelChooseDate");
                        wx.setStorageSync('hotelFirstDate', item.date);
                        this.$emit("nochoose","0");
                    }
                }
            }
        },
        watch:{
            daysArray(newValue,oldValue){
                console.log(newValue,oldValue);
                console.log(this.startDay,this.endDay);
                let chooseHotel=wx.getStorageSync("hotelChooseDate");
                let _firstDay=wx.getStorageSync("hotelFirstDate");
                console.log(_firstDay);
                console.log(chooseHotel);
                if(chooseHotel!==null){
                    for(let i=0;i<newValue.days.length;i++){
                        if(chooseHotel.includes(newValue.days[i].date)){
                            //this.$set(newValue.days[i], "isFirstDay", false);
                            //this.$set(newValue.days[i], "isEndDay", false);
                            //this.$set(newValue.days[i], "ischeckd", true);
                            this.daysArray.days[i].isFirstDay=false;
                            this.daysArray.days[i].isEndDay=false;
                            this.daysArray.days[i].ischeckd=true;
                        }else{
                            this.daysArray.days[i].ischeckd=false;
                            //this.$set(newValue.days[i], "ischeckd", false);
                        }
                        if(newValue.days[i].date!=_firstDay && newValue.days[i].isFirstDay==true){
                            // this.$set(newValue.days[i], "isFirstDay", false);
                            // this.$set(newValue.days[i], "isEndDay", true);
                            // this.$set(newValue.days[i], "ischeckd", false);
                            this.daysArray.days[i].isFirstDay=false;
                            this.daysArray.days[i].isEndDay=true;
                            this.daysArray.days[i].ischeckd=false;
                        }
                        if(newValue.days[i].isFirstDay==true && newValue.days[i].date!=this.startDay){
                            //this.$set(newValue.days[i], "isFirstDay", false);
                            this.daysArray.days[i].isFirstDay=false;
                        }
                        if(newValue.days[i].isEndDay==true && newValue.days[i].date!=this.endDay){
                            //this.$set(newValue.days[i], "isEndDay", false);
                            this.daysArray.days[i].isEndDay=false;
                        }
                    }
                }else{
                }
            }
        },
        destroyed(){
            wx.removeStorageSync("hotelChooseDate");
            wx.removeStorageSync("hotelFirstDate");
        },
        created(){
            console.log("created");
            this.init();
        }
    }
</script>
<style scoped lang="stylus">
    .red{
        color #ed4864
    }
.dateComponent{
    /*padding-bottom 2rem*/
    padding-bottom 110rpx
    display: flex;
    flex-flow: row wrap;
    width 700rpx
    min-height 400rpx
    font-size:28rpx
    margin 0 auto
    .day-item{
        width: 100rpx
        height 100rpx
        display flex
        flex-flow column nowrap
        align-items center
        justify-content center
    }
    .today{
        color #ed4864
    }
    .check-in-day{
        background-color orange !important;
        color #fff
    }
    .dis-none{
        display none
    }
    .choose-date{
        background-color blanchedalmond
        color #fff
    }
    .check-out-day{
        background-color darkkhaki
        color #fff
    }
    .check-in-day{
        background-color orange !important
        color #fff
    }
}
</style>
