<!DOCTYPE html>
<html lang="en">
    <head>
        <title>COVID-19 en Perú</title>
        <?php require_once 'metas.php'; ?>
        <?php require_once 'estilos.php'; ?>
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
                        <h3 class="breadcrumb-header">Datos Generales</h3>
                    </div>
                    <div id="main-wrapper">
                    <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-white stats-widget">
                                    <div class="panel-body">
                                        <div class="pull-left">
                                            <span id="nroConfirmed" style="color: #EC5E69" class="stats-number">0</span>
                                            <p style="color: #EC5E69" class="stats-info">Confirmados</p>
                                        </div>
                                        <div class="pull-right">
                                            <i class="icon-arrow_upward stats-icon"></i>
                                            <div id="nroNewsConfirmed" class="text-danger pull-right">(0) 0%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-white stats-widget">
                                    <div class="panel-body">
                                        <div class="pull-left">
                                            <span id="nroDeaths" class="stats-number">0</span>
                                            <p tyle="color: gray" class="stats-info">Fallecidos</p>
                                        </div>
                                        <div class="pull-right">
                                            <i class="icon-arrow_upward stats-icon"></i>
                                            <div id="nroNewsDeaths" class="text-danger pull-right">(0) 0%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-white stats-widget">
                                    <div class="panel-body">
                                        <div class="pull-left">
                                            <span id="nroRecovered" style="color:rgb(99, 203, 137)" class="stats-number">0</span>
                                            <p style="color:rgb(99, 203, 137)" class="stats-info">Recuperados</p>
                                        </div>
                                        <div class="pull-right">
                                            <i class="icon-arrow_downward stats-icon"></i>
                                            <div id="nroNewsRecovered" class="text-success pull-right">(0) 0%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-white stats-widget">
                                    <div class="panel-body">
                                        <div class="pull-left">
                                            <span id="nroActives" style="color: #ffd700" class="stats-number">0</span>
                                            <p style="color: #ffd700" class="stats-info">Activos</p>
                                        </div>
                                        <div class="pull-right">
                                            <i class="actives icon-arrow_upward stats-icon"></i>
                                            <div id="nroNewsActives" class="text-danger pull-right">(0) 0%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="panel panel-white stats-widget">
                                    <div class="panel-body">
                                        <div class="pull-left">
                                            <span id="nroDescarted" style="color:rgb(99, 203, 137)" class="stats-number">0</span>
                                            <p style="color:rgb(99, 203, 137)" class="stats-info">Pruebas Descartadas</p>
                                        </div>
                                        <div class="pull-right">
                                            <i class="newProves icon-arrow_upward stats-icon"></i>
                                            <div id="nroNewsDescarted" class="text-success pull-right">(0) 0%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="panel panel-white stats-widget">
                                    <div class="panel-body">
                                        <div class="pull-left">
                                            <span id="nroProves" class="stats-number">0</span>
                                            <p tyle="color: gray" class="stats-info">Pruebas Realizadas</p>
                                        </div>
                                        <div class="pull-right">
                                            <i class="newProves icon-arrow_upward stats-icon"></i>
                                            <div id="nroNewsRealized" class="text-success pull-right">(0) 0%</div>
                                        </div>
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
        <script src="./js/dashboard.js"></script>
    </body>
</html>