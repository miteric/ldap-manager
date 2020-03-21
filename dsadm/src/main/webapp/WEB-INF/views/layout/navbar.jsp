<%@ page language="java" isELIgnored="false"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:directive.include file="./include.jsp" />
<div class="navbar navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target=".navbar-collapse">
				<span class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="<c:url value="/" />"><fmt:message
					key="application_title" /></a>
		</div>
		<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav">
				<li class="dropdown"><a href="#" class="dropdown-toggle"
					data-toggle="dropdown" role="button" aria-haspopup="true"
					aria-expanded="false">MENU<span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#" />SUBMENU 1</a></li>
						<li><a href="#" />SUBMENU 2</a></li>
					</ul></li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown"><a href="#" class="dropdown-toggle"
					data-toggle="dropdown" role="button" aria-haspopup="true"
					aria-expanded="false"> <span class="glyphicon glyphicon-user"
						aria-hidden="true"></span> USER<span
						class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="${pageContext.request.contextPath}/profile"><i
								class="fa fa-user fa-fw"></i> <fmt:message key="profile" /></a></li>
						<li><a href="${pageContext.request.contextPath}/chpwd"><i
								class="fa fa-pencil fa-fw"></i> <fmt:message key="change_pw" /></a></li>
						<li class="divider"></li>
						<li><a href="${pageContext.request.contextPath}/logout"><i
								class="fa fa-sign-out fa-fw"></i> <fmt:message key="logout" /></a></li>

					</ul></li>
			</ul>
		</div>
	</div>
</div>