<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
    <script type="text/javascript">
    function idUse() {
    	opener.document.registFrm.id.value = document.overlapFrm.retype_id.value;
    	self.close();
    }
    </script>
</head>
<body>
	<h2>아이디 중복확인하기</h2>
	
	<h3>부모창에서 입력한 아이디 : <%=request.getParameter("id") %></h3>
	
	<h3>아이디가 중복되었을때 재입력한 아이디</h3>
	<form name="overlapFrm">
		<input type="text" name="retype_id" size="20"/>
		<input type="button" value="아이디 사용하기" onclick="idUse();">
	</form>
</body>
</html>