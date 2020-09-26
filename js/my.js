layui.use(['jquery', 'layer'], function () {
    layui.$(function () {
        layui.$('#verify_identity').click(function () {
            layui.layer.open({
                type: 1,
                title: '实名认证',
                content: layui.$("#test"),
                skin: 'layui-layer-rim', //加上边框
                area: ['95%', '280px'], //宽高
                shade: 0.5,
                btn: ['提交', '取消'],
                btn1: function (index, layero) {
                    layui.layer.msg("实名认证成功！");
                    layui.layer.close(index);
                },
                btn2: function (index, layero) {
                    layui.layer.close(index);
                },
                cancel: function (index, layero) {
                    layui.layer.close(index);
                }
            });
        });
    });
});
