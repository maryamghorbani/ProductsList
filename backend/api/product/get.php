<?php
header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');
header('Access-Control-Max-Age: 86400');
header('Access-Control-Expose-Headers: Content-Length, X-JSON');

include_once __DIR__ . '/../models/productsModel.php';
include_once __DIR__ . '/../controllers/baseController.php';

$controller = new BaseController(new ProductsModel());

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (!empty($_GET['sku'])) {
            try {
                echo $controller->parseJson($controller->model->getBySku($_GET['sku']));
            } catch (Exception $e) {
                echo $controller->parseJson(array("error" => true, "message" => $e->getMessage()));
            }
            break;
        }
        if (!empty($_GET['id'])) {
            try {
                $controller->getRequestByID($_GET['id']);
            } catch (Exception $e) {
                echo $controller->parseJson(array("error" => true, "message" => $e->getMessage()));
            }
            break;
        }
        $controller->getRequestAll();
        break;
    default:
        echo json_encode(array("error" => true, "message" => "Wrong HTTP method"), JSON_UNESCAPED_UNICODE);
        break;
}

?>