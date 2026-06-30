<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');

//ligar a bd
$conn = mysqli_connect('localhost','root','','esp32');
if(!$conn){
    die("Falha a conectar");
}
//fetch do site
if($_SERVER['REQUEST_METHOD'] ==='GET'){
    $tipo = $_GET['tipo'] ?? 'temp';
    if($tipo ==='passagens'){
        $result = $conn -> query("SELECT * FROM esp32_passagens ORDER BY data_leitura");
    } else{
        $result = $conn -> query("SELECT * FROM esp32_dados ORDER BY data_leitura");
    }

    $rows=[];
    while($row =$result->fetch_assoc()) $rows[]=$row;
    echo json_encode($rows);
    $conn ->close();
    exit;

}

if($_SERVER['REQUEST_METHOD'] !== 'POST'){
    die("metodo nao permitido");
}

$data = json_decode(file_get_contents('php://input'),true);


//enviar os dados para a BD
if ($data['tipo'] === 'passagem') {
    if (!isset($data['distancia'])) {
        http_response_code(400);
        die(json_encode(['erro' => 'Distância em falta']));
    }
    $stmt = $conn->prepare(
        "INSERT INTO esp32_passagens (distancia) VALUES (?)"
    );
    $stmt->bind_param('d', $data['distancia']);

} else if ($data['tipo'] === 'temp') {
    if (!isset($data['temp'], $data['humidade'])) {
        http_response_code(400);
        die(json_encode(['erro' => 'Dados em falta']));
    }
    $stmt = $conn->prepare(
        "INSERT INTO esp32_dados (temperatura, humidade) VALUES (?, ?)"
    );
    $stmt->bind_param('dd', $data['temp'], $data['humidade']);
}

$stmt->execute();
echo json_encode(['status' => 'ok', 'id' => $conn->insert_id]);
$conn->close();

?>