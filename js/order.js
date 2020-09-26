layui.use(['jquery', 'layer'], function () {
    layui.$(function () {
        layui.$('.layui-btn-sm').click(function () {
            //询问框

            layer.confirm('确定要购买吗？', {
                btn: ['是的', '再想想'], //按钮
                title: '确认订单：',
            }, function () {
                layer.msg('购买成功！', {
                    icon: 1
                });
            }, function () {
                //  layer.msg('购买成功！', {icon: 1});
            });
        });
    });
});
