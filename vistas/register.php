<?php require_once 'sesion.validar.view.php'; ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>COVID-19 en Perú</title>
        <?php require_once 'metas.php'; ?>
        <?php require_once 'estilos.php'; ?>
        <link href="../assets/plugins/dropzone/dropzone.min.css" rel="stylesheet">
        <link href="../assets/plugins/bootstrap-datepicker/css/datepicker3.css" rel="stylesheet" type="text/css"/>
        <link href="../assets/plugins/plupload/js/jquery.plupload.queue/css/jquery.plupload.queue.css" rel="stylesheet" type="text/css"/>
        <style>
        /* Set the size of the div element that contains the map */
        #map {
            height: 400px;  /* The height is 400 pixels */
            width: 100%;  /* The width is the width of the web page */
        }
        .controls {
            margin-top: 16px;
            border: 1px solid transparent;
            border-radius: 2px 0 0 2px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            height: 32px;
            outline: none;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        #pac-input {
            background-color: #fff;
            font-family: Roboto;
            font-size: 15px;
            font-weight: 300;
            margin-left: 12px;
            padding: 0 11px 0 13px;
            text-overflow: ellipsis;
            width: 400px;
        }

        #pac-input:focus {
            border-color: #4d90fe;
        }

        .pac-container {
            font-family: Roboto;
        }

        #type-selector {
            color: #fff;
            background-color: #4d90fe;
            padding: 5px 11px 0px 11px;
        }

        #type-selector label {
            font-family: Roboto;
            font-size: 13px;
            font-weight: 300;
        }

        /*
        .timepage{text-align:center;width:100%;font-size:20px;border:1px solid #fff;padding:6px;margin:12px 0 12px 0;}
        */

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
                        <h3 class="breadcrumb-header">¡Reporta tu Incidencia!</h3>
                        <!--
                        <input class="timepage" size="5" id="timespent" name="timespent"><br>
                        -->
                    </div>
                    <div id="main-wrapper">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-white">
                                <div class="panel-body">
                                    <div id="rootwizard">
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li role="presentation" class="active"><a href="#tab1" data-toggle="tab"><i class="fa fa-info m-r-xs"></i>Datos de la Incidencia</a></li>
                                            <li role="presentation"><a href="#tab2" data-toggle="tab"><i class="fa fa-list m-r-xs"></i>Cuestionario de Afectación</a></li>
                                            <li role="presentation"><a href="#tab3" data-toggle="tab"><i class="fa fa-check m-r-xs"></i>Fin - Reporte</a></li>
                                        </ul>
                                        <div class="progress progress-sm m-t-sm">
                                            <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 25%;">
                                            </div>
                                        </div>
                                        <form id="wizardForm" novalidate="novalidate">
                                            <div class="tab-content">
                                                <div class="tab-pane active fade in" id="tab1">
                                                    <div class="row m-b-lg">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label for="idServicio">Servicio</label>
                                                                    <select id="idServicio" name="idServicio" class="form-control">
                                                                        <option value="0">Selecciona un servicio</option>
                                                                        <option value="1">Agua</option>
                                                                        <option value="2">Luz</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="idEmpresa">Empresa</label>
                                                                    <select id="idEmpresa" name="idEmpresa" class="form-control" disabled>
                                                                        <option value="0">Selecciona una empresa</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="idTipoIncidencia">Tipo de Incidencia</label>
                                                                    <select id="idTipoIncidencia" name="idTipoIncidencia" class="form-control" disabled>
                                                                        <option value="0">Selecciona un tipo de Incidencia</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="idSede">Sede</label>
                                                                    <select id="idSede" name="idSede" class="form-control" disabled>
                                                                        <option value="0">Selecciona una sede</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label for="txtDescripcion">Descripcion</label>
                                                                    <textarea id="txtDescripcion" name="txtDescripcion" class="input-large form-control" id="message" rows="3" placeholder="Escríbenos que sucede brevemente ..." style="margin: 0px -11.671875px 0px 0px; width: 100%; height: 82px;"></textarea>
                                                                </div>
                                                                <!--
                                                                <div class="form-group col-md-4">
                                                                    <label for="exampleInputFecha">Fecha de la Incidencia</label>
                                                                    <input type="text" class="form-control date-picker" name="exampleInputFecha" id="exampleInputFecha" placeholder="Fecha">
                                                                </div>
                                                                -->
                                                                <div class="form-group col-md-12">
                                                                    <label for="map">Lugar de la Incidencia</label>
                                                                    <input id="pac-input" class="controls" type="text" placeholder="Intenta buscar tu dirección aquí">
                                                                    <br>
                                                                    <div id="map"></div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="panel panel-white">
                                                                        <div class="panel-heading clearfix">
                                                                            <h4 class="panel-title">Adjuntar Evidencias</h4>
                                                                        </div>
                                                                        <div class="panel-body">
                                                                            <div id="uploader">
                                                                                <p>Your browser doesn't have Flash, Silverlight or HTML5 support.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <p>Esta información se toma como DECLARACIÓN DEL RECLAMANTE aplicable por los distintos tipos de incidencia señalados.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="tab2">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div id="preg_alt" name="preg_alt"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="tab3">
                                                    <h3 style="margin-top:25px;">¡Registro Completado!</h3>
                                                    <div class="alert alert-success m-t-sm m-b-lg" role="alert">
                                                        ¡Gracias por ayudarnos a mejorar, tu aporte es valioso! <br> Este es el informe reportado sobre tu caso, puedes imprimirlo y usarlo para tus fines convenientes.
                                                    </div>
                                                    <div class="panel panel-white">
                                                        <div class="panel-body">
                                                                <div class="col-md-4" style="padding-left:0;">
                                                                    <h3 class="m-b-md m-t-xxs" id="companyName" name="companyName"><b>Nombre de la Compañía</b></h3>
                                                                    <address id="dirSede" name="dirSede">
                                                                        Chiclayo, Lambayeque                                                                    </address>
                                                                </div>
                                                                <div class="col-md-8 text-right" style="padding-right:0;">
                                                                    <h3 class="m-t-xs" id="nroComprobante" name="nroComprobante">Comprobante Nº 2019-001</h3>
                                                                    <button type="button" class="btn btn-default"><i class="fa fa-mail-reply"></i> Enviar por correo</button>
                                                                </div>
                                                                <div class="col-md-12" style="padding-left:0;">
                                                                    <hr>
                                                                    <p>
                                                                        <strong>Presentado por</strong><br>
                                                                        <p id="registerby" name="registerby">José Manuel Puicón Rodas</p>
                                                                    </p>
                                                                </div>
                                                                <div class="col-md-12" style="padding-left:0;padding-right:0;">
                                                                    <table class="table table-striped">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Código</th>
                                                                                <th>Descripción</th>
                                                                                <th>Fecha y Hora</th>
                                                                                <th>Tipo</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td id="incCode" name="incCode">001</td>
                                                                                <td id="incDesc" name="incDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit a unde eum nostrum nisi facilis dignissimos ullam at dicta veniam soluta adipisci praesentium!</td>
                                                                                <td id="incFecha" name="incFecha">12-09-2019 9:57am</td>
                                                                                <td id="incTipo" name="incTipo">Desague</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="col-md-8" style="padding-left:0;">
                                                                    <h4>Atención de Quejas y Reclamos</h4>
                                                                    <p id="registerTime" name="registerTime">Registrado el 12-09-2019 a las 12:43pm</p>
                                                                </div>
                                                                <div class="col-md-4" style="padding-right:0;">
                                                                    <div class="text-right">
                                                                        <!--
                                                                        <img src="http://via.placeholder.com/350x150?text=signature" height="150" class="m-t-lg" alt="">
                                                                        -->
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul class="pager wizard">
                                                    <li class="previous disabled"><a href="#" class="btn btn-default">Anterior</a></li>
                                                    <li class="next"><a href="#" class="btn btn-default">Siguiente</a></li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div><!-- Main Wrapper -->
                    <?php require_once 'footer.php'; ?>  
                </div><!-- /Page Inner -->
            </div><!-- /Page Content -->
        </div><!-- /Page Container -->
        
        <?php require_once 'scripts.php'; ?>
        <script src="../assets/plugins/jquery-validation/jquery.validate.min.js"></script>
        <script src="../assets/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js"></script>
        <script src="../assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        <script src="../assets/plugins/dropzone/dropzone.min.js"></script>
        <script src="../assets/plugins/plupload/js/plupload.full.min.js"></script>
        <script src="../assets/plugins/plupload/js/jquery.plupload.queue/jquery.plupload.queue.min.js"></script>
        <script src="../assets/plugins/plupload/js/jquery.plupload.queue/jquery.plupload.queue.js"></script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDqdbLyqjAAHMB8t9Z6H5mjmhT5W46Srws&callback=initMap&libraries=places"></script>          
        <script src="js/incidencia.js"></script>
        <!--
        <script>
            startday=new Date();
            clockStart=startday.getTime();
            function initStopwatch(){
                var myTime=new Date();
                return((myTime.getTime()-clockStart)/1000);
            }
            function getSecs(){
                var tSecs=Math.round(initStopwatch());
                var iSecs=tSecs%60;
                var iMins=Math.round((tSecs-30)/60);
                var sSecs=""+((iSecs>9)?iSecs:"0"+iSecs);
                var sMins=""+((iMins>9)?iMins:"0"+iMins);
                document.getElementById('timespent').value=sMins+":"+sSecs;
                window.setTimeout('getSecs()',1000);
            }
            window.onload = function(){
                window.setTimeout('getSecs()',1);
            }
        </script>
        -->
    </body>
</html>