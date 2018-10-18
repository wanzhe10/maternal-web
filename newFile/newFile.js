$(function () {
    layui.use(['layer', 'form', 'element', 'laydate'], function () {
        var layer = layui.layer,
            form = layui.form,
            element = layui.element,
            laydate = layui.laydate;
        form.render();
        layui.use('laypage', function () {
            var laypage = layui.laypage;
            //执行一个laypage实例
            laypage.render({
                elem: 'test1',
                count: 70,
                theme: '#68b7e7',
                limit: 7, // 每页的条数
                groups: 4,
                jump: function (obj, first) {

                }
            });
        });
    });

    // 点击修改按钮弹框 
    $('.amendBtn').click(function(){
        var $ = layui.jquery;
        // 弹出层
        layer.open({
            type: 1,
            title: '',
            area: ['590px', '470px'],
            // skin: "noBackground",
            closeBtn: false,
            shade: [0.7, '#000000'],
            shadeClose: false,
            scrollbar: false,
            content: $('.modificationLayer'),
        });

    });
    // 修改怀孕次数弹框取消按钮
    $('.cancelBtn').click(function(){
        layer.closeAll();
        $('.modificationLayer').hide();
    });
    // 修改怀孕次数弹框确认按钮
    $('saveBtn').click(function(){
    });
  
});