// ==UserScript==
// @name        重生之我是细语微博
// @namespace   Violentmonkey Scripts
// @match       http://zijingbt.njuftp.org/talk.html
// @grant       none
// @version     1.1
// @author      LadderOperator
// @description 2020/11/27 下午7:01:24
// ==/UserScript==


const style = document.createElement("style");
style.innerHTML = 

`
/* ----- 重生之我是细语微博 ----- */	

td.talk_body > div.talk:hover {
	margin:10px 0px 0px 0px;
	background-color:rgba(255, 255, 255, 1.0);
	padding:20px 30px;
	border-radius:3px;
	box-shadow:0 0 2px rgba(0,0,0,0.3);
	transition:background-color ease-in-out 0.2s;

}

td.talk_body > div.talk {
	margin:10px 0px 0px 0px;
	background-color:rgba(255, 255, 255, 0.8);
	padding:20px 30px;
	border-radius:3px;
	box-shadow:0 0 2px rgba(0,0,0,0.3);
    transition:background-color ease-in-out 0.2s;

}

td.talk_body{
    padding:0px;
    margin:0px;
    border:none;
}

div.talk_reply{
	background-color:#c8c8c838;
	border:none;
	margin:10px 0px;
	padding:10px
}

td.talk_body_reply {
	background:none;
	border-bottom:#630360 dotted 1px;
}

td.talk_body_reply > div.talk{
	word-break:break-all;
}

td.main_table_torrent{
	background:none;
}

td.top_state, #tdClientTrigger, tr.top_navbar{
	display:none;
}

table.top_bar:hover{
	width:100%;
	height:50px;
	margin:0px;
	padding-left:20%;
	padding-right:80%;
	background-color:rgba(255,255,255,0.9);
	border-radius:0px;
	box-shadow:0 0 3px 0px rgba(0,0,0,0.3);
	z-index:1;
	position:relative;
	border-top:2px solid #630360;
	transition:background-color ease-in-out 0.2s;
	position:fixed;
	top:0;
}

table.top_bar{
	width:100%;
	height:50px;
	margin:0px;
	padding-left:20%;
	padding-right:80%;
	background-color:rgba(255,255,255,0.8);
	border-radius:0px;
	box-shadow:0 0 3px 0px rgba(0,0,0,0.3);
	z-index:1;
	position:relative;
	border-top:2px solid #630360;
	transition:background-color ease-in-out 0.2s;
	position:fixed;
	top:0;
}

body {
	margin:100px 0px 0px 0px;
}

td.talk_table_left_top {
    background:none;
}

table.talk_table tr.talk_table, tr.talk_body{
	background:none;
}

div.static_header span{
	color:#630360 !important;
	text-align:right !important;
    font-weight:normal !important;
    font-size:18px !important;

    padding:3px;

}

div.static_header:before{
    content:"🔈："
}

div.static_header {
	text-align:left !important;
	padding:10px;
}

p.talk_tag_hot{
	font-size:20px;
	color:#630360 !important;
}

div.talk_tag_hot{
	background-color:rgba(255,255,255,0.8);
	padding:10px;
	border-radius:3px;
	border-top:none;
	box-shadow:0 0 3px 0px rgba(0,0,0,0.3)
}

div.talk_rt {
	background-color:#63036021;
}

td.talk_table_right {
	background-color:rgba(255,255,255,0.8);
	border-left: 10px #CCCCFF solid;
	padding:5px;
}

td.talk_table_left_bottom {
	margin:0px !important;
	padding:5px;
}

div.talk_table_post{
	background-color:rgb(255,255,255);
	border-radius:3px;
	padding:10px;
  box-shadow:0 0 3px 0px rgba(0,0,0,0.3);
}

table.top_header, table.navbar, table.talk_table, table.talk_table_post, table.talk_table_right, table.talk_table_posted{
	background:none!important;
}

div.talk_table_post tr{
	background:none!important;
}

div.talk_table_post *{
	margin:2px;
}

div.talk_reply_form input{
	float:right;
}

td.talk_table_count #talk_left{
	float:left;
}

a.talk_reply:before{
	content:"💬"
}

a.talk_delete:before{
	content:"❌"
}

a.talk_time:before{
	content:"⏰"
}

a.talk_rt:before{
	content:"📃"
}

a.talk_link:before{
	content:"🌐"
}

a.top_logout:before{
	content:"💨"
}

span.talk_channel:before{
	content:"📍"
}

#tdMessageTrigger img{
	display:none;
}

#tdMessageTrigger:before{
	content:"📧"
}

#tdToolTrigger img{
	display:none;
}

#tdToolTrigger:before{
	content:"🔧"
}

#tdTalkTrigger:before{
	content:"💬"
}

input {
	color:white;
	border:none;
	padding: 5px;
	border-radius:3px;
	background-color: #630360;
	transition:background-color ease-in-out 0.2s;
}

input:hover {
	color:white;
	border:none;
	padding: 5px;
	border-radius:3px;
	background-color: #8d0688;
	transition:background-color ease-in-out 0.2s;
}

div.talk_table_posted {
	border-top:none;
	padding:10px 0px;
	width:100%;
	margin-left:0px!important;
	margin-right: 0px!important;
}

table.talk_table_posted {
	width:100%;
}

`;

document.body.appendChild(style);