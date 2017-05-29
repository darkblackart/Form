<!DOCTYPE html>
<html lang="en">
<head>
    <title>Formularz Zgłoszeniowy na wycieczkę</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
</head>
<body>

<div class="container">
	<div class="panel panel-primary">
		<div class="panel-heading">Formularz Zgłoszeniowy na wycieczkę</div>
		<div class="panel-body">
			 <form action="script.php" method="post">
                 <div class="form-group">
                     <label for="name">Płeć:</label><br>
                     <label class="radio-inline">
                         <input type="radio" name="sex" id="sex">Kobieta
                     </label>
                     <label class="radio-inline">
                         <input type="radio" name="sex" id="sex">Mężczyzna
                     </label>
                     <div class="alert_sex" id = "alert_sex"></div>
                 </div>

				  <div class="form-group">
					<label for="name">Imię:</label>
					<input  class="form-control" id="name">
                      <div class="alert_name" id = "alert_name"></div>
				  </div>

				  <div class="form-group">
					<label for="last_name">Nazwisko:</label>
					<input  class="form-control" id="last_name">
                      <div class="alert_last_name" id = "alert_last_name"></div>
				  </div>
				  <div class="form-group">
					<label for="adress">Adres zamieszkania:</label>
					<input  class="form-control" id="adress">
                      <div class="alert_adress" id = "alert_adress"></div>
				  </div>
				  <div class="form-group">
					<label for="number_album">Nr Albumu:</label>
					<input  class="form-control" id="number_album">
                      <div class="alert_number_album" id = "alert_number_album"></div>
				  </div>
				 <div class="form-group">
                     <label for="field">Kierunek Studiów:</label>
                     <input  class="form-control" id="field">
                     <div class="alert_field" id = "alert_field"></div>
                 </div>
                 <div class="form-group">
                     <label for="email">Adres e-mail:</label>
                     <input  class="form-control" id="email">
                     <div class="alert_email" id = "alert_email"></div>
                 </div>
                 <div class="submit">
                     <div class="alert_send" id = "alert_send"></div>
                     <input type="button" value="Wyślij" class="btn btn-info" id="send" />
                 </div>

			</form> 
		</div>
	</div>
  </div>

</body>
</html>
