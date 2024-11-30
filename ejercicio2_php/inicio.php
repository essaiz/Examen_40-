<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreProducto = $_POST['nombreProducto'];
    $categoria = $_POST['categoria'];
    $precioUnitario = $_POST['precioUnitario'];
    $unidades = $_POST['unidades'];
    $precioTotal = $precioUnitario * $unidades;

    $descuentoPorcentaje = 0;
    $valorDescuento = 0;

    if ($categoria == 'A') {
        if ($unidades >= 1 && $unidades <= 10) {
            $descuentoPorcentaje = 1;
        } elseif ($unidades >= 11 && $unidades <= 20) {
            $descuentoPorcentaje = 1.5;
        } elseif ($unidades > 20) {
            $descuentoPorcentaje = 2;
        }
    } elseif ($categoria == 'B') {
        if ($unidades >= 1 && $unidades <= 10) {
            $descuentoPorcentaje = 1.2;
        } elseif ($unidades >= 11 && $unidades <= 20) {
            $descuentoPorcentaje = 2;
        } elseif ($unidades > 20) {
            $descuentoPorcentaje = 3;
        }
    } elseif ($categoria == 'C') {
        if ($unidades >= 1 && $unidades <= 10) {
            $descuentoPorcentaje = 0;
        } elseif ($unidades >= 11 && $unidades <= 20) {
            $descuentoPorcentaje = 0.5;
        } elseif ($unidades > 20) {
            $descuentoPorcentaje = 1;
        }
    }

    
    $valorDescuento = ($precioTotal * $descuentoPorcentaje) / 100;
    $total = $precioTotal - $valorDescuento;
}
?>

