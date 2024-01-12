// 全局变量



//document.getElementById('text').innerHTML = text;
let part2_px=2300;
let part3_px=4500;
let end_px=7597;



function click_scroll(part) {
    document.getElementById('text').style.display ='block';
    document.getElementById('part_button').style.display ='none';
    var target = document.getElementById('target'+part);
    // 使用 scrollIntoView 方法滚动到目标元素
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    document.getElementById('quit').style.top = (scrollPosition+40)+'px';

    document.getElementById('feedback').textContent = scrollPosition+'/'+windowHeight;
    document.getElementById('feedback').style.top = (scrollPosition+40)+'px';

    // 根据滚动的高度改变背景图
    if (scrollPosition < part2_px) {
        document.getElementById('img1').style.top = (scrollPosition+382)+'px';
        document.getElementById('img1').style.display = 'block';
        document.getElementById('img2').style.display = 'none';
        document.getElementById('img3').style.display = 'none';
        document.getElementById('img4').style.display = 'none';
        document.getElementById('img5').style.display = 'none';



    } else if (scrollPosition >= part2_px && scrollPosition < part3_px) {
        document.getElementById('img1').style.top = (scrollPosition+382)+'px';
        document.getElementById('img1').style.display = 'block';
        document.getElementById('img2').style.top = (scrollPosition+273)+'px';
        document.getElementById('img2').style.display = 'block';
        document.getElementById('img3').style.display = 'none';
        document.getElementById('img4').style.display = 'none';
        document.getElementById('img5').style.display = 'none';



    
    } else if (scrollPosition >= part3_px&& scrollPosition < end_px) {
        document.getElementById('img1').style.top = (scrollPosition+382)+'px';
        document.getElementById('img1').style.display = 'block';
        document.getElementById('img2').style.top = (scrollPosition+273)+'px';
        document.getElementById('img2').style.display = 'block';
        document.getElementById('img3').style.top = (scrollPosition+152)+'px';
        document.getElementById('img3').style.display = 'block';
        document.getElementById('img4').style.display = 'none';
        document.getElementById('img5').style.display = 'none';

    }

    else {
        document.getElementById('img1').style.top = (scrollPosition+382)+'px';
        document.getElementById('img1').style.display = 'block';
        document.getElementById('img2').style.top = (scrollPosition+273)+'px';
        document.getElementById('img2').style.display = 'block';
        document.getElementById('img3').style.top = (scrollPosition+152)+'px';
        document.getElementById('img3').style.display = 'block';  
        document.getElementById('img4').style.top = (scrollPosition)+'px';
        document.getElementById('img4').style.display = 'block';  
        document.getElementById('img5').style.top = (scrollPosition-60)+'px';
        document.getElementById('img5').style.display = 'block';  
    }
    // ...根据需要添加更多条件
  });