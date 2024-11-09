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
      <h1>Voyages</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Voyages</h5>
              <button id="open-modal">Ajouter un Voyage</button>

              <div id="myModal" class="modal">
                  <div class="modal-content">
                      <span class="close">&times;</span>
                      <h2>Ajouter Voyage</h2>
                      <form id="voyage-form">
                          <div class="forms-group">
                              <label for="heure_depart">Heure Départ:</label>
                              <input type="time" id="heure_depart" name="heure_depart" required>
                          </div>
                          <div class="forms-group">
                              <label for="heure_arrivee">Heure Arrivée:</label>
                              <input type="time" id="heure_arrivee" name="heure_arrivee" required>
                          </div>
                          <div class="forms-group">
                              <label for="date">Date:</label>
                              <input type="date" id="date" name="date" required>
                          </div>
                          <div class="forms-group">
                              <label for="id_classe">ID Classe:</label>
                              <input type="number" id="id_classe" name="id_classe" required>
                          </div>
                          <div class="forms-group">
                              <label for="id_personnel">ID Personnel:</label>
                              <input type="number" id="id_personnel" name="id_personnel" required>
                          </div>
                          <div class="forms-group">
                              <label for="id_chauffeur">ID Chauffeur:</label>
                              <input type="number" id="id_chauffeur" name="id_chauffeur" required>
                          </div>
                          <div class="forms-group">
                              <label for="id_vehicule">ID Véhicule:</label>
                              <input type="text" id="id_vehicule" name="id_vehicule" required>
                          </div>
                          <div class="forms-group">
                              <label for="id_trajet">ID Trajet:</label>
                              <input type="number" id="id_trajet" name="id_trajet" required>
                          </div>
                          <button type="submit">Ajouter Voyage</button>
                      </form>
                  </div>
              </div>

              <!-- Table with stripped rows -->
              <table class="table datatable">
                <thead>
                    <tr>
                        <th>Heure Départ</th>
                        <th>Heure Arrivée</th>
                        <th>Date</th>
                        <th>ID Classe</th>
                        <th>ID Personnel</th>
                        <th>ID Chauffeur</th>
                        <th>ID Véhicule</th>
                        <th>ID Trajet</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>08:00</td>
                        <td>10:00</td>
                        <td>2024-11-10</td>
                        <td>1</td>
                        <td>101</td>
                        <td>201</td>
                        <td>AB-123-CD</td>
                        <td>301</td>
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