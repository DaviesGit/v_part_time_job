
layui.use(['jquery','layer'],function(){
    layui.$(function(){
        layui.$('.SubmitButton-2wG4T').click(function(){
            layui.layer.msg("登录成功！");
            setTimeout(()=>location.href="./my.html",500);
        });
    });
});

