
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
    <body >
        <!-- Page Container -->
        <div class="page-container">
            <?php require_once 'sidebar.php'; ?>
            
            <!-- Page Content -->
            <div class="page-content">            
                <?php require_once 'header.php'; ?>  

                <!-- Page Inner -->
                <div class="page-inner">
                    <div class="page-title">
                        <h3 class="breadcrumb-header">Reporte en Perú</h3>
                    </div>
                    <div id="main-wrapper">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-white">
                                <div class="panel-body">
                                    <div class="panel-heading clearfix">
                                        <h4 class="panel-title">Curva de Proyección</h4>
                                        <h4 class="panel-title">Fuente: Datos Diarios Públicos del Ministerio de Salud </h4>
                                    </div>
                                    <canvas id="chart0"></canvas>
                                </div>
                            </div>
                            <div class="panel panel-white">
                                <div class="panel-body">
                                    <div class="panel-heading clearfix">
                                        <h4 class="panel-title">Cantidad de Confirmados Por Día</h4>
                                        <h4 class="panel-title">Fuente: Datos Diarios Públicos del Ministerio de Salud </h4>
                                    </div>
                                    <canvas id="chart1"></canvas>
                                </div>
                            </div>
                            <div class="panel panel-white">
                                <div class="panel-body">
                                    <div class="panel-heading clearfix">
                                        <h4 class="panel-title">Cantidad de Confirmados Por Regiones</h4>
                                        <h4 class="panel-title">Fuente: Datos Diarios Públicos del Ministerio de Salud </h4>
                                    </div>
                                    <canvas id="chart3"></canvas>
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
        
        <script src="./js/chartall.js"></script>
        <script src="../assets/plugins/chartjs/chart.min.js"></script>
    </body>
</html>