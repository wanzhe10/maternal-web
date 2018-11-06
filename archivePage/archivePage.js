$(function(){
  $('.newBtn').click(function(){
      window.location = '/maternal-web/newFile/newFile.html';
  });
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

});