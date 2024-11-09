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
              <h5 class="card-title">Datatables</h5>
              <button id="open-modal">Ajouter un Modele</button>

              <div id="myModal" class="modal">
                  <div class="modal-content">
                      <span class="close">&times;</span>
                      <form id="modele-form">
                        <div class="form-group">
                            <label for="nom_modele">Nom Modèle:</label>
                            <input type="text" id="nom_modele" name="nom_modele" required>
                        </div>
                        <div class="form-group">
                            <label for="marque">Marque:</label>
                            <input type="text" id="marque" name="marque" required>
                        </div>
                        <button type="submit">Ajouter Modèle</button>
                      </form>
                  </div>
              </div>
              <!-- Table with stripped rows -->
              <table class="table datatable">
                <thead>
                    <tr>
                        <th>Nom Modèle</th>
                        <th>Marque</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Modèle A</td>
                        <td>Marque X</td>
                        <td>
                            <button>Modifier</button>
                            <button>Supprimer</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Modèle B</td>
                        <td>Marque Y</td>
                        <td>
                            <button>Modifier</button>
                            <button>Supprimer</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Modèle C</td>
                        <td>Marque Z</td>
                        <td>
                            <button>Modifier</button>
                            <button>Supprimer</button>
                        </td>
                    </tr>
                </tbody>
              </table>
              <!-- End Table with stripped rows -->

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