
if (navigator.share) {
    const shareButton = document.getElementById('shareMoreBtn');

    shareButton.addEventListener('click', async () => {
        try {
            await navigator.share({
                text: 'Visit MTX666\'s page here:',
                url: 'https://mcc-masterix.github.io/mtx666socialplatforms/'
            });
            console.log('Content shared successfully');
            id('popupMore').style.display='none';
        } catch (error) {
            console.error('Error sharing content:', error);
        }
    });
} else {
    console.log('Web Share API is not supported in this browser.');
}


let content = 'Visit MTX666\'s page here:';
let link = 'https://mcc-masterix.github.io/mtx666socialplatforms/';

window.ct=top.crt=crt=>top.document.createElement(crt);
window.id=top.id=id=>top.document.getElementById(id);

document.getElementById('releaseBtnID').addEventListener('click', function(){
    document.getElementById('popupRelease').style.display='block';
});
document.getElementById('closePopup').addEventListener('click', function(){
    document.getElementById('popupRelease').style.display='none';
});
document.getElementById('moreBtn').addEventListener('click', function(){
    document.getElementById('popupMore').style.display='block';
});
document.getElementById('closePopup2').addEventListener('click', function(){
    document.getElementById('popupMore').style.display='none';
});

//Redirects
document.getElementById('sc').addEventListener('click', function(){
    open('https://on.soundcloud.com/cfja9');
});
document.getElementById('yt').addEventListener('click', function(){
    open('https://youtube.com/@mtx6662?si=PS-OVXl3l4MbFwfX');
});
document.getElementById('yt_music').addEventListener('click', function(){
    open('https://music.youtube.com/channel/UCosLfwFxKDvmj1hDi4PVwQA?si=wsCV-aupFpUnedtX');
});
document.getElementById('ig').addEventListener('click', function(){
    open('https://www.instagram.com/wxlfgang666_mcc/');
});
document.getElementById('tt').addEventListener('click', function(){
    open('https://www.tiktok.com/@mtx666x');
});
document.getElementById('mail').addEventListener('click', function(){
    open('mailto:mtx6x6x6@gmail.com');
});
document.getElementById('latestreleaseSC').addEventListener('click', function(){
    open('https://on.soundcloud.com/j2Zty');
});
document.getElementById('latestreleaseYT').addEventListener('click', function(){
    open('https://youtu.be/N13GyXu30JY?si=5xiAozvhjCVBdxhK');
});

//Share
    id("shareFB").addEventListener("click", function() {
    var url = link; // URL to be shared
    var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url); 
    window.open(facebookUrl, '_blank');
  });
  id("shareLI").addEventListener("click", function() {
    var url = link; // URL to be shared
    var text = content;
    var linkedinUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&summary=' + encodeURIComponent(text); 
    window.open(linkedinUrl, '_blank');
  });
  id("shareTW").addEventListener("click", function() {
    var url = link; // URL to be shared
    var text = content;
    var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url);
    window.open(twitterUrl, '_blank');
  });
  id("shareWA").addEventListener("click", function() {
    var url = link; // URL to be shared
    var text = content;
    var whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(text + ' ' + url);   
    window.open(whatsappUrl, '_blank');
  });
  id("shareDC").addEventListener("click", function() {
    window.open('https://discord.gg/FAuzeAmm2B');
  });