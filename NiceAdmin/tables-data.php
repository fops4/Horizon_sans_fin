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
  <link href="form.css" rel="stylesheet">

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
                <button id="open-modal" class="btn btn-primary">Ajouter un Client</button>

                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <form id="chauffeur-form">
                          <div class="form-group">
                              <label for="nom">Nom:</label>
                              <input type="text" id="nom" name="nom" required>
                          </div>
                          <div class="form-group">
                              <label for="prenom">Prénom:</label>
                              <input type="text" id="prenom" name="prenom" required>
                          </div>
                          <div class="form-group">
                              <label for="adresse">Adresse:</label>
                              <input type="text" id="adresse" name="adresse" required>
                          </div>
                          <div class="form-group">
                              <label for="numero">Numéro:</label>
                              <input type="text" id="numero" name="numero" required>
                          </div>
                          <div class="form-group">
                              <label for="email_inscription">Email:</label>
                              <input type="email" id="email_inscription" name="email_inscription" required>
                          </div>
                          <br/>
                          <button type="submit" class="btn btn-primary">Ajouter Client</button>
                        </form>
                    </div>
                </div>
                <table class="table">
                  <thead>
                      <tr>
                          <th>Nom</th>
                          <th>Prénom</th>
                          <th>Adresse</th>
                          <th>Numéro</th>
                          <th>Email</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Dupont</td>
                          <td>Jean</td>
                          <td>123 Rue de Paris</td>
                          <td>0123456789</td>
                          <td>jean.dupont@example.com</td>
                      </tr>
                      <tr>
                          <td>Martin</td>
                          <td>Claire</td>
                          <td>456 Avenue des Champs</td>
                          <td>0987654321</td>
                          <td>claire.martin@example.com</td>
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