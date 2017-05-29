<!DOCTYPE html>
<html lang="en">
<head>
  <title>Formularz Zgłoszeniowy na wycieczkę</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
	<div class="panel panel-primary">
		<div class="panel-heading">Formularz Zgłoszeniowy na wycieczkę</div>
		<div class="panel-body">
			 <form action="script.php" method="post">
				  <div class="form-group">
					<label for="name">Imię:</label>
					<input  class="form-control" id="name">
				  </div>
				  <div class="form-group">
					<label for="last_name">Nazwisko:</label>
					<input  class="form-control" id="last_name">
				  </div>
				  <div class="form-group">
					<label for="adress">Adres zamieszkania:</label>
					<input  class="form-control" id="adress">
				  </div>
				  <div class="form-group">
					<label for="number_album">Nr Albumu:</label>
					<input  class="form-control" id="number_album">
				  </div>
				 <div class="form-group">
					<label for="field">Kierunek Studiów:</label>
					<input  class="form-control" id="field">
				  </div>
				  <button type="submit" class="btn btn-default">Wyślij</button>
				  <div class="message" id = "message">
					<!--Zwraca komunikaty -->
				  </div>
			</form> 
		</div>
	</div>
  </div>

</body>
</html>
