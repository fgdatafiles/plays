਍⠀昀甀渀挀琀椀漀渀⠀⤀ഀഀ
{਍    ✀甀猀攀 猀琀爀椀挀琀✀㬀ഀഀ
    var t,left,right,p2,htp_appla,header,btt1,classToDispatch, bgd,next;਍    瘀愀爀 琀㄀Ⰰ琀㌀Ⰰ琀㐀Ⰰ瀀㄀Ⰰ琀氀Ⰰ搀攀猀挀㬀ഀഀ
਍    瘀愀爀 䜀愀洀攀伀瘀攀爀㴀昀甀渀挀琀椀漀渀⠀⤀ഀഀ
    {਍        琀栀椀猀⸀䌀漀渀琀愀椀渀攀爀开挀漀渀猀琀爀甀挀琀漀爀⠀⤀㬀ഀഀ
        t = this;਍        琀栀椀猀⸀椀渀椀琀椀愀氀椀稀攀⠀⤀㬀ഀഀ
    };਍    瘀愀爀 瀀 㴀 挀⸀攀砀琀攀渀搀⠀䜀愀洀攀伀瘀攀爀Ⰰ 挀⸀䌀漀渀琀愀椀渀攀爀⤀㬀ഀഀ
    p.initialize=function() {਍        ഀഀ
        setTimeout(playSounds, 1000, 'gameover');਍        戀最搀 㴀 渀攀眀 挀⸀䈀椀琀洀愀瀀⠀洀愀椀渀⸀氀漀愀搀攀搀䐀愀琀愀⸀最攀琀刀攀猀甀氀琀⠀✀戀最搀开最愀洀攀✀⤀⤀㬀ഀഀ
        t.addChildAt(bgd);਍        瀀㄀ 㴀 渀攀眀 挀⸀䈀椀琀洀愀瀀⠀洀愀椀渀⸀氀漀愀搀攀搀䐀愀琀愀⸀最攀琀刀攀猀甀氀琀⠀✀最漀开瀀㄀✀⤀⤀㬀ഀഀ
        p1.x = -300;਍        瀀㄀⸀礀 㴀 ㈀㔀㐀㬀ഀഀ
਍        瀀㈀ 㴀 渀攀眀 挀⸀䈀椀琀洀愀瀀⠀洀愀椀渀⸀氀漀愀搀攀搀䐀愀琀愀⸀最攀琀刀攀猀甀氀琀⠀✀最漀开瀀㈀✀⤀⤀㬀ഀഀ
        p2.x = 1680;਍        瀀㈀⸀礀 㴀 ㈀㜀㤀㬀ഀഀ
਍        栀琀瀀开愀瀀瀀氀愀 㴀 渀攀眀 挀⸀䈀椀琀洀愀瀀⠀洀愀椀渀⸀氀漀愀搀攀搀䐀愀琀愀⸀最攀琀刀攀猀甀氀琀⠀✀栀琀瀀开愀瀀瀀氀愀✀⤀⤀㬀ഀഀ
        t.addChild(htp_appla);਍        栀琀瀀开愀瀀瀀氀愀⸀砀  㴀 㐀㠀㔀㬀ഀഀ
        htp_appla.y  =-720;਍        栀攀愀搀攀爀 㴀 渀攀眀 挀⸀䌀漀渀琀愀椀渀攀爀⠀⤀㬀ഀഀ
        header.x = 500;਍        栀攀愀搀攀爀⸀礀 㴀 ⴀ㜀㈀　㬀ഀഀ
        let b =new c.Bitmap(main.loadedData.getResult('header'));਍        栀攀愀搀攀爀⸀愀搀搀䌀栀椀氀搀⠀戀⤀ഀഀ
        t.addChild(header);਍ഀഀ
        let t1 = new c.Text(strings.gameover.text, strings.gameover.font, '#ED1E82');਍        栀攀愀搀攀爀⸀愀搀搀䌀栀椀氀搀⠀琀㄀⤀㬀ഀഀ
        t1.y = 60+strings.gameover.y;਍        琀㄀⸀砀 㴀 㘀㠀　⼀㈀⬀猀琀爀椀渀最猀⸀最愀洀攀漀瘀攀爀⸀砀㬀ഀഀ
        t1.lineWidth = 680;਍        琀㄀⸀琀攀砀琀䄀氀椀最渀㴀✀挀攀渀琀攀爀✀㬀ഀഀ
        t1.textBaseline = "alphabetic";਍ഀഀ
        t.addChild(header);਍ഀഀ
਍        搀攀猀挀 㴀 渀攀眀 挀⸀䌀漀渀琀愀椀渀攀爀⠀⤀㬀ഀഀ
        desc.x = 501;਍        搀攀猀挀⸀礀 㴀 㜀㈀　㬀⼀⼀㄀㠀㜀ഀഀ
਍        戀 㴀 渀攀眀 挀⸀䈀椀琀洀愀瀀⠀洀愀椀渀⸀氀漀愀搀攀搀䐀愀琀愀⸀最攀琀刀攀猀甀氀琀⠀✀搀攀猀挀爀椀瀀琀椀漀渀✀⤀⤀㬀ഀഀ
        desc.addChildAt(b);਍ഀഀ
        t1 = new c.Text(strings.totalscore.text, strings.totalscore.font, '#009CDE');਍        搀攀猀挀⸀愀搀搀䌀栀椀氀搀⠀琀㄀⤀㬀ഀഀ
        t1.y = 96+strings.totalscore.y;਍        琀㄀⸀砀 㴀 㘀㜀㠀⼀㈀⬀猀琀爀椀渀最猀⸀琀漀琀愀氀猀挀漀爀攀⸀砀㬀ഀഀ
        t1.lineWidth = 678;਍        琀㄀⸀琀攀砀琀䄀氀椀最渀㴀✀挀攀渀琀攀爀✀㬀ഀഀ
        t1.textBaseline = "alphabetic";਍        琀⸀洀漀甀猀攀䔀渀愀戀氀攀搀 㴀 琀爀甀攀㬀ഀഀ
਍        琀㄀ 㴀 渀攀眀 挀⸀吀攀砀琀⠀瀀漀椀渀琀猀Ⰰ ✀㄀㄀㐀瀀砀 䌀攀爀瘀漀✀Ⰰ ✀⌀　　㤀䌀䐀䔀✀⤀㬀ഀഀ
        desc.addChild(t1);਍        琀㄀⸀礀 㴀 ㈀㈀　㬀ഀഀ
        t1.x = 678/2;਍        琀㄀⸀氀椀渀攀圀椀搀琀栀 㴀 㘀㜀㠀㬀ഀഀ
        t1.textAlign='center';਍        琀㄀⸀琀攀砀琀䈀愀猀攀氀椀渀攀 㴀 ∀愀氀瀀栀愀戀攀琀椀挀∀㬀ഀഀ
        t.mouseEnabled = true;਍ഀഀ
਍        最氀漀戀愀氀猀⸀戀攀猀琀匀挀漀爀攀 㴀䴀愀琀栀⸀洀愀砀⠀瀀愀爀猀攀䤀渀琀⠀爀攀愀搀䌀漀漀欀椀攀⠀✀洀漀氀攀礀开挀愀琀挀栀攀爀✀⤀⤀Ⰰ㄀⤀ഀഀ
        if(isNaN(globals.bestScore)){਍            最氀漀戀愀氀猀⸀戀攀猀琀匀挀漀爀攀㴀瀀漀椀渀琀猀㬀ഀഀ
਍        紀攀氀猀攀笀ഀഀ
            if(globals.bestScore<points){਍                最氀漀戀愀氀猀⸀戀攀猀琀匀挀漀爀攀 㴀 瀀漀椀渀琀猀㬀ഀഀ
            }਍        紀ഀഀ
਍        挀爀攀愀琀攀䌀漀漀欀椀攀⠀✀洀漀氀攀礀开挀愀琀挀栀攀爀✀Ⰰ最氀漀戀愀氀猀⸀戀攀猀琀匀挀漀爀攀⤀㬀ഀഀ
        t1 = new c.Text(strings.bestscore.text+globals.bestScore, strings.bestscore.font, '#74489D');਍        搀攀猀挀⸀愀搀搀䌀栀椀氀搀⠀琀㄀⤀㬀ഀഀ
        t1.y = 296+strings.bestscore.y;਍        琀㄀⸀砀 㴀 㘀㜀㠀⼀㈀⬀猀琀爀椀渀最猀⸀戀攀猀琀猀挀漀爀攀⸀砀㬀ഀഀ
        t1.lineWidth = 678;਍        琀㄀⸀琀攀砀琀䄀氀椀最渀㴀✀挀攀渀琀攀爀✀㬀ഀഀ
        t1.textBaseline = "alphabetic";਍        琀⸀洀漀甀猀攀䔀渀愀戀氀攀搀 㴀 琀爀甀攀㬀ഀഀ
        t.addChild(desc)਍ഀഀ
਍ഀഀ
        next = new  FrameBtt(main.loadedData.getResult('playagain_off'),main.loadedData.getResult('playagain_on'),'#74489D');਍        渀攀砀琀⸀砀 㴀 㜀㜀㘀㬀ഀഀ
        next.y = 800;਍        渀攀砀琀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀✀挀氀椀挀欀✀Ⰰ漀渀倀氀愀礀䄀最愀椀渀⤀㬀ഀഀ
        t.addChild(next)਍        琀⸀愀搀搀䌀栀椀氀搀⠀瀀㈀Ⰰ瀀㄀⤀㬀ഀഀ
਍ഀഀ
਍ഀഀ
        tl = gsap.timeline();਍        琀氀⸀琀漀⠀栀琀瀀开愀瀀瀀氀愀Ⰰ笀礀㨀㄀㔀Ⰰ攀愀猀攀㨀倀漀眀攀爀㄀⸀攀愀猀攀伀甀琀紀⤀ഀഀ
        tl.to(header,{y:96,ease:Power1.easeOut},'<55%')਍        琀氀⸀琀漀⠀瀀㄀Ⰰ笀砀㨀㌀㤀㜀Ⰰ攀愀猀攀㨀倀漀眀攀爀㄀⸀攀愀猀攀伀甀琀紀Ⰰ✀㰀㔀㔀─✀⤀ഀഀ
        tl.to(p2,{x:1036,ease:Power1.easeOut},'<')਍        琀氀⸀琀漀⠀搀攀猀挀Ⰰ笀礀㨀㄀㠀㜀Ⰰ攀愀猀攀㨀倀漀眀攀爀㄀⸀攀愀猀攀伀甀琀紀Ⰰ✀㰀㔀㔀─✀⤀ഀഀ
਍        琀氀⸀琀漀⠀渀攀砀琀Ⰰ笀礀㨀㔀㜀㜀Ⰰ攀愀猀攀㨀倀漀眀攀爀㄀⸀攀愀猀攀伀甀琀紀Ⰰ✀㰀㔀㔀─✀⤀ഀഀ
਍ഀഀ
਍    紀㬀ഀഀ
਍ഀഀ
    function onPlayAgain(){਍        挀氀愀猀猀吀漀䐀椀猀瀀愀琀挀栀 㴀 匀琀攀瀀㄀㬀ഀഀ
        animOut();਍    紀ഀഀ
਍    昀甀渀挀琀椀漀渀 愀渀椀洀伀甀琀⠀⤀笀ഀഀ
        ਍ഀഀ
        t.dispatch();਍ഀഀ
    }਍    瀀⸀瀀愀甀猀攀䜀愀洀攀 㴀 昀甀渀挀琀椀漀渀⠀⤀笀ഀഀ
਍ഀഀ
਍    紀㬀ഀഀ
਍    瀀⸀爀攀猀甀洀攀䜀愀洀攀 㴀 昀甀渀挀琀椀漀渀⠀⤀笀ഀഀ
਍ഀഀ
    }਍ഀഀ
    p.dispatchStep1 = function(){਍        琀⸀搀椀猀瀀愀琀挀栀䔀瘀攀渀琀⠀笀瀀愀爀愀洀㨀 匀琀攀瀀㄀Ⰰ 琀礀瀀攀㨀✀挀栀愀渀最攀倀愀最攀✀Ⰰ戀甀戀戀氀攀猀㨀琀爀甀攀Ⰰ挀愀渀挀攀氀愀戀氀攀㨀琀爀甀攀紀⤀㬀ഀഀ
    };਍    瀀⸀搀椀猀瀀愀琀挀栀 㴀 昀甀渀挀琀椀漀渀⠀⤀笀ഀഀ
        t.dispatchEvent({param: classToDispatch, type:'changePage',bubbles:true,cancelable:true});਍    紀㬀ഀഀ
਍    眀椀渀搀漀眀⸀䜀愀洀攀伀瘀攀爀 㴀 挀⸀瀀爀漀洀漀琀攀⠀䜀愀洀攀伀瘀攀爀Ⰰ ∀䌀漀渀琀愀椀渀攀爀∀⤀㬀ഀഀ
}());਍�