<%@ page language="java" isELIgnored="false" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:directive.include file="/WEB-INF/views/layout/include.jsp" />

<%@ page session="false" %>
<html>
<head>
	
	<title>Home</title>
	<jsp:directive.include file="/WEB-INF/views/layout/meta.jsp" />
</head>
<body>
<jsp:directive.include file="/WEB-INF/views/layout/navbar.jsp" />

<div class="container" style="margin-top: 60px;">
<h1>HELLO WORLD!</h1>

<P>  The time on the server is ${serverTime}. </P>

</div>
<jsp:directive.include file="/WEB-INF/views/layout/footer.jsp" />
</body>
</html>
