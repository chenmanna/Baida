<template>
    <div class="login">
        <img src="../../img/login1.jpg" alt="">
        <div class="loginCon">
            <div>
                <span>账号:</span>
                <input type="text" v-model="phone">
            </div> 
            <div>
                <span>密码:</span>
                <input type="password" v-model="password">
            </div>
            <p><span class="phone">手机快速注册</span><span class="password">忘记密码？</span></p>
            <input type="button" value="登陆" class="button" @click="login">
            <div class="loginType">第三方登陆</div>
            <span>图标</span>
        </div>
        <!-- <div class="pop_up" v-show="isShow">
            <div class="con">请输入手机号或密码</div>
        </div> -->
    </div>    
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            phone: '',
            password: '',
            isShow: false
        }
    },
    methods: {
        login(){
            console.log(this.phone,this.password);
            if(this.phone&&this.password){
                sessionStorage.setItem('user',this.phone);
                this.$router.push('/home')
            }else{
                // this.isShow = true;
                alert('请输入用户信息')
            }
        }
    },
    beforeRouteLeave(to,from,next){
        // console.log(this.$store)
         this.$store.commit('changeNavShow', true); 
         next();
         
    },
    beforeRouteEnter(to,from,next){
        // this.$store.commit('changeNavShow', false);
        // next();
        next(vm => {
            vm.$store.commit('changeNavShow', false);
         })
    },
    created(){
        console.log(this.phone);

    }
}
</script>
<style lang="scss" scoped>
    .login{
        width: rem(750px);
        max-height: 100vh;
        font-size: rem(16px);
        color: #4f4f4f;
        img{
            max-height: 100vh;
            width: rem(750px);
            // color: rgba(0,0,0,.5);
            opacity: 0.6;
        }
        .loginCon{
            position: absolute;
            top: 180px;
            width: rem(650px);
            height: rem(600px);
            padding: rem(50px);
            div{
                width: 100%;
                padding: rem(16px) 0 rem(16px) 0;
                border-bottom: 1px solid #e5e5e5;
                padding-left: rem(6px);
                span{
                    color:#000;
                    font-size: rem(30px);

                }
                input{
                    margin-left: rem(16px);
                    width: rem(510px);
                    // opacity: 0;
                    background: rgba(0,0,0,0);
                    color: #4f4f4f;
                    border: 0 none;
                    outline:medium;
                }
            }
            p{
                padding-top: rem(12px);
                margin-bottom: rem(138px);
                .phone{
                    color: #e72714;
                    float: left;
                }
                .password{
                    color: #666;
                    float: right;
                }
            }
            .button{
                width: rem(650px);
                height: rem(98px);
                border: 0 none;
                border-radius: 2px;
                background: #ff6700;
                color:#fff;
                font-size: rem(40px);
                outline:medium;
            }
            .loginType{
                border: 0 none;
                text-align: center;
            }
        }
        .pop_up{
            position: absolute;
            z-index: 100;
            width: 100%;
            top: 40%;
            text-align: center;
            pointer-events: none;
            background: #000;
            color: #fff;
            display: block;
                margin-bottom: rem(16px);
                animation-duration: .5;
            .con{
              
                animation-name: con;
            }
        }
    }
</style>


