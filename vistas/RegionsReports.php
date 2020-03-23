
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>COVID-19 en Perú</title>
        <?php require_once 'metas.php'; ?>
        <?php require_once 'estilos.php'; ?>
        <style>
            @media only screen and (max-width: 991px) {
                .panel {
                    width: 215vw;
                    border-radius: 4px;
                    box-shadow: none;
                    padding: 25px;
                    border-color: #272c32;
                    background-color: #14181b;
                }

                .chart-container {
                    position: relative; 
                    height:50vh; 
                    width:200vw
                }
            }
        </style>
    </head>
    <body>
        <!-- Page Container -->
        <div class="page-container">
            <?php require_once 'sidebar.php'; ?>
            
            <!-- Page Content -->
            <div class="page-content">            
                <?php require_once 'header.php'; ?>  

                <!-- Page Inner -->
                <div class="page-inner">
                    <div class="page-title">
                        <h3 class="breadcrumb-header">Reporte de las Regiones del Perú</h3>
                    </div>
                    <div id="main-wrapper">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-white">
                                <div class="panel-body">
                                    <select id="idDep" name="idDep" class="form-control">
                                        <option value="NA">Selecciona un departamento</option>
                                    </select>
                                    <br>
                                    <div class="panel-heading clearfix">
                                        <h4 class="panel-title">Cantidad de Confirmados Por Día</h4>
                                        <h4 class="panel-title">Fuente: Datos Diarios Públicos del Ministerio de Salud </h4>
                                    </div>
                                    <canvas id="chartRegion" class="hidden"></canvas>
                                </div>
                            </div>
                        </div>
                    </div><!-- Row -->
                    </div><!-- Main Wrapper -->
                    <?php require_once 'footer.php'; ?>  
                </div><!-- /Page Inner -->
            </div><!-- /Page Content -->
        </div><!-- /Page Container -->
        
        <?php require_once 'scripts.php'; ?>
        
        <script src="./js/regionschartall.js"></script>
        <script src="../assets/plugins/chartjs/chart.min.js"></script>
    </body>
</html>