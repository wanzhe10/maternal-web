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
    $(".riskAssessmentBox").delegate(".topicItem", "click", function () {
        $(this).toggleClass("active");
    })

        // teb切换
        $('.recordNumsBox>ul>li').click(function () {
            var index = $(this).index();
            console.log(index)
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        // 自觉不适查看全部按钮
        $('.conscientiousAll').click(function(){
            $('.malaise').toggle(500);
              if ($('#conscientiousAllIcon').hasClass('layui-icon-down')) {
                 $('#conscientiousAllIcon').removeClass('layui-icon-down').addClass('layui-icon-up');
              }else {
                 $('#conscientiousAllIcon').removeClass('layui-icon-up').addClass('layui-icon-down');
              }
        });
          // 指导处理意见查看全部按钮
          $('.guidanceBtn').click(function () {
              $('.handlingSuggestion').toggle(500);
              if ($('#guidanceBtnIcon').hasClass('layui-icon-down')) {
                  $('#guidanceBtnIcon').removeClass('layui-icon-down').addClass('layui-icon-up');
              } else {
                  $('#guidanceBtnIcon').removeClass('layui-icon-up').addClass('layui-icon-down');
              }
          });
            //检查结果查看全部按钮
            $('.inspectionResult').click(function () {
                $('.consequenceBox').toggle(500);
                if ($('#inspectionResultIcon').hasClass('layui-icon-down')) {
                    $('#inspectionResultIcon').removeClass('layui-icon-down').addClass('layui-icon-up');
                } else {
                    $('#inspectionResultIcon').removeClass('layui-icon-up').addClass('layui-icon-down');
                }
            });

   // BMI弹框
   $('.BMLValue').click(function () {
       var $ = layui.jquery;
       // 弹出层
       layer.open({
           type: 1,
           title: '',
           area: ['800px', '500px'],
           closeBtn: false,
           shade: [0.7, '#000000'],
           shadeClose: false,
           scrollbar: false,
           content: $('.bmiBox'),
       });
   });
   $('.bmiCloneBtn').click(function () {
       layer.closeAll(); //关闭所有页面层
       $('.bmiBox').hide();
   });

   
});