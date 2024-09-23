// 외부파일은 head나 body 둘 다 가능합니다.
// (완료)
// 문제 1. 웹문서 로딩시 1초뒤에 로고가 3초에 걸쳐서 서서히 나타나도록
// (완료)
let appear = function() {
    $('#mainHeader').children('h1').animate({'opacity':1},3000);
};
$(window).on('load',function(){
    setTimeout(appear,1000);
});
// 문제 2. 네비게이션이 숨겨져 있도록 설정
// (완료) - 마우스 휠 방향에 따라 나타났다가 사라지게 만듦!
$('.navWrap').animate({'height':0},2000)
$(window).on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta; 
    if(wheel < 0){
        $('.navWrap').stop().animate({'height':0});
    }else if(wheel > 0){
        $('.navWrap').stop().animate({'height':'50px'});
    };
});
// 문제 3. #navigation h2 버튼 클릭시 메뉴 펼침, 숨김 구현
// (완료)
$('#navigation').children('h2').on('click' , function() {
    if(Number($('.navWrap').height()) == 0){
        $('.navWrap:not(:animated)').animate({'height':'50px'})
    }else if(Number($('.navWrap').height()) == 50){
        $('.navWrap:not(:animated)').animate({'height':0})
    };
    });
// 문제 4. #navigation li 클릭시 해당 섹션으로 슬라이딩되도록
// (완료)
$('.navWrap ul li').on('click', function(){
let pos1 = $(this).children('a').attr('href');
let pos2 = $(pos1).offset();
$('html, body').stop().animate({scrollTop:pos2.top},1000);
});
// 문제 5. .btnList span 클릭시 슬라이더 애니메이션 구현
// (완료)
let num = 0;
let pos;
$('.btnList').children('span').on('click', function(){
    $('.btnList').children('span').removeClass('on')
    $(this).addClass('on') 
    num = $(this).index();
    pos = `${num * (-100)}%`;
    $(".sliderList").animate({ 'margin-left': pos })
})
// 문제 6. 코딩교육프로그램 섹션의 span 태그를 이용해서 아코디언 효과 적용
// (완료) - 스팬의 '-'도 '+'로 바뀌게 설정!
$('#contentWrap2').children('div').on('click',function(){
    $('#contentWrap2').children('div').css({'transition':'1s'}).removeClass('pro')
    $(this).css({'transition':'1s'}).addClass('pro')
    $('#contentWrap2').children('div').children('span').text('-')
    $(this).children('span').text('+')
    })
// 문제 7. .contentWrap1에 도달시 컨텐츠가 나타나기
// (완료)
    $('.contentWrap1').css({'opacity':0})
    $(window).on('scroll',function(){
        let w = parseInt($(window).scrollTop()/100)
        let c = parseInt(($('#content1').offset().top/100)-2)
        console.log(w,c)
        if(w >= c){
            $('.contentWrap1').stop().animate({'opacity':1},2000)
        }
    })


