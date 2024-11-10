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
              <!-- Table with stripped rows -->
              <button id="open-modal" class="btn btn-primary">Ajouter un colis</button>

              <div id="myModal" class="modal">
                  <div class="modal-content">
                      <span class="close">&times;</span>
                      <form id="colis-form">
                        <div class="form-group">
                            <label for="id_colis">ID Colis:</label>
                            <input type="number" id="id_colis" name="id_colis" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea id="description" name="description" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="prix">Prix:</label>
                            <input type="number" step="0.01" id="prix" name="prix" required>
                        </div>
                        <div class="form-group">
                            <label for="destinataire">Destinataire:</label>
                            <input type="text" id="destinataire" name="destinataire" required>
                        </div>
                        <div class="form-group">
                            <label for="statut">Statut:</label>
                            <input type="text" id="statut" name="statut" required>
                        </div>
                        <div class="form-group">
                            <label for="numero_destinataire">Numéro Destinataire:</label>
                            <input type="text" id="numero_destinataire" name="numero_destinataire" required>
                        </div>
                        <div class="form-group">
                            <label for="ville_depart">Ville Départ:</label>
                            <input type="text" id="ville_depart" name="ville_depart" required>
                        </div>
                        <div class="form-group">
                            <label for="ville_arrivee">Ville Arrivée:</label>
                            <input type="text" id="ville_arrivee" name="ville_arrivee" required>
                        </div>
                        <div class="form-group">
                            <label for="id_client">ID Client:</label>
                            <input type="number" id="id_client" name="id_client" required>
                        </div>
                        <div class="form-group">
                            <label for="id_voyage">ID Voyage:</label>
                            <input type="number" id="id_voyage" name="id_voyage" required>
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-primary">Ajouter Colis</button>
                      </form>
                  </div>
              </div>
              <table class="table datatable">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Prix</th>
                        <th>Destinataire</th>
                        <th>Statut</th>
                        <th>Numéro Destinataire</th>
                        <th>Ville Départ</th>
                        <th>Ville Arrivée</th>
                        <th>ID Client</th>
                        <th>ID Voyage</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Livraison de documents</td>
                        <td>15.00</td>
                        <td>Dupont Jean</td>
                        <td>En route</td>
                        <td>0123456789</td>
                        <td>Paris</td>
                        <td>Lyon</td>
                        <td>1</td>
                        <td>1</td>
                        <td>
                            <button class="btn btn-primary"><i class="bi bi-pen"></i></button>
                            <button class="btn btn-primary"><i class="bi bi-x-square"></i></button>
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