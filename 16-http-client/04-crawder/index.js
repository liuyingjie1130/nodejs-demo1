#!/usr/bin/node
const http=require('http'),
      cheerio=require('cheerio'),
      log=console.log;
var address='http://edu.51cto.com/courselist/index-zh5.html';


http.get(address,(res)=>{

    var html='';
    res.on('data',(data)=>{
        html+=data;
    })
    res.on('end',()=>{
   // console.log(html);
    var $=cheerio.load(html);
    // console.log( $('body').find('div.main').length);
     $('body').find('div.main').each(function(){
     var cName=$(this).find('a').text(),
           cTime=$(this).find('p.fl').text(),
           cTarget=$(this).find('div.course_target').text(),
           cURL=$(this).find('a').attr('href');
     if(cTime==='') return;
     log('课程名称：',cName.trim());
     log('课程时长：',cTime.trim());
     log('课程目标：',cTarget.trim());
     log('课程地址：',cURL.trim());
     log();


     })
    })
} )
