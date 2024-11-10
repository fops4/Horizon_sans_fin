<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Horizon Sans Fin</title>
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

<?php include 'header.php'; ?>

<main id="main" class="main">

  <div class="pagetitle">
    <h1>Réservations par Voyage</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item">Tables</li>
        <li class="breadcrumb-item active">Réservations</li>
      </ol>
    </nav>
  </div><!-- End Page Title -->

  <section class="section">
    <div class="row">
      <div class="col-lg-12">

        <?php
        // Exemple de données de voyages. À remplacer par une requête à votre base de données.
        $voyages = [
          ["id" => 1, "nom" => "Voyage Paris-Lyon"],
          ["id" => 2, "nom" => "Voyage Marseille-Nice"]
        ];

        // Boucle pour chaque voyage
        foreach ($voyages as $voyage) {
          echo "<div class='card'>";
          echo "<div class='card-body'>";
          echo "<h5 class='card-title'>" . $voyage['nom'] . "</h5>";

          // Bouton pour ajouter une nouvelle réservation
          echo "<button class='btn btn-primary mb-3' onclick='openModal(" . $voyage['id'] . ")'>Ajouter une Réservation</button>";

          // Tableau des réservations pour ce voyage
          echo "<table class='table table-striped'>";
          echo "<thead><tr><th>ID Client</th><th>Numéro de Siège</th><th>Date</th></tr></thead>";
          echo "<tbody>";
          
          // Exemple de données de réservations. À remplacer par les données de votre base de données.
          $reservations = [
            ["id_client" => 101, "numero_siege" => 5, "date" => "2024-11-10"],
            ["id_client" => 102, "numero_siege" => 8, "date" => "2024-11-10"]
          ];

          foreach ($reservations as $reservation) {
            echo "<tr>";
            echo "<td>" . $reservation['id_client'] . "</td>";
            echo "<td>" . $reservation['numero_siege'] . "</td>";
            echo "<td>" . $reservation['date'] . "</td>";
            echo "</tr>";
          }

          echo "</tbody>";
          echo "</table>";
          echo "</div>";
          echo "</div>";
        }
        ?>

      </div>
    </div>
  </section>

  <!-- Modal pour ajouter une réservation -->
  <div id="reservationModal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <form id="reservationForm">
        <div class="form-group">
          <label for="client_id">ID Client:</label>
          <input type="text" id="client_id" name="client_id" required>
        </div>
        <div class="form-group">
          <label for="numero_siege">Numéro de Siège:</label>
          <input type="text" id="numero_siege" name="numero_siege" required>
        </div>
        <div class="form-group">
          <label for="date_reservation">Date:</label>
          <input type="date" id="date_reservation" name="date_reservation" required>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter la Réservation</button>
      </form>
    </div>
  </div>

</main><!-- End #main -->

<?php include 'footer.php'; ?>

<!-- Scripts -->
<script>
  function openModal(voyageId) {
    document.getElementById('reservationModal').style.display = 'block';
    // Stockez l'ID du voyage dans un champ caché ou dans une variable pour l'envoyer au backend si nécessaire
  }

  function closeModal() {
    document.getElementById('reservationModal').style.display = 'none';
  }

  // Ajout de l'événement de soumission du formulaire
  document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Code pour envoyer la réservation au backend
    closeModal();
  });
</script>

</body>

</html>
