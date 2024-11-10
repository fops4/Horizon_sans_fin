<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Horison Sans Fin</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.gstatic.com" rel="preconnect">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet">
  <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

</head>

<body>

<?php
  include 'header.php';
  ?>

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Data Tables</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item">Tables</li>
          <li class="breadcrumb-item active">Data</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
                <h5 class="card-title">Inscriptions</h5>
                <button id="open-modal" class="btn btn-primary">Ajouter un personnel</button>

                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <form id="personnel-form">
                            <div class="form-group">
                                <label for="nom_personnel">Nom:</label>
                                <input type="text" id="nom_personnel" name="nom_personnel" required>
                            </div>
                            <div class="form-group">
                                <label for="adresse_personnel">Adresse:</label>
                                <input type="text" id="adresse_personnel" name="adresse_personnel" required>
                            </div>
                            <div class="form-group">
                                <label for="poste_personnel">Poste:</label>
                                <input type="text" id="poste_personnel" name="poste_personnel" required>
                            </div>
                            <div class="form-group">
                                <label for="numero_personnel">Numéro:</label>
                                <input type="text" id="numero_personnel" name="numero_personnel" required>
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-primary">Ajouter Personnel</button>
                        </form>
                    </div>
                </div>
            <table class="table datatable">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Poste</th>
                        <th>Numéro</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Martin</td>
                        <td>456 Avenue des Champs</td>
                        <td>456 Avenue des Champs</td>
                        <td>0987654321</td>
                        <td>
                            <button class="btn btn-primary"><i class="bi bi-pen"></i></button>
                            <button class="btn btn-primary"><i class="bi bi-x-square"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

        </div>
      </div>
    </section>

  </main><!-- End #main -->

  <?php
  include 'footer.php';
  ?>

</body>

</html>