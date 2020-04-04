<?php

class About extends Controller {

    public function index($nama = 'Arif', $pekerjaan = 'Mahasiswa', $umur = 17)
    {
        $data = [
            'judul' => 'About',
            'nama' => $nama,
            'pekerjaan' => $pekerjaan,
            'umur' => $umur,
        ];
        $this->view('templates/header', $data);
        $this->view('about/index', $data);
        $this->view('templates/footer');
    }

    public function page()
    {
        $this->view('templates/header');
        $this->view('about/page');
        $this->view('templates/footer');
    }

}