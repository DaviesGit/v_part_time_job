layui.use(['jquery', 'layer'], function () {
    layui.$(function () {
        layui.$('.layui-btn-sm').click(function () {
            //询问框

            layer.confirm('确定要申请该兼职吗？', {
                btn: ['是的', '再想想'], //按钮
                title: '申请兼职：',
            }, function () {
                layer.msg('已成功投递你的简历！', {
                    icon: 1
                });
            }, function () {
                //  layer.msg('购买成功！', {icon: 1});
            });
        });
    });
});
