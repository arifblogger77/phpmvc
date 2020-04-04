$(function() {

    $('.tampilModalTambah').on('click', function() {

        $('#judulModal').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('.modal-body form')[0].reset();
    });

    $('.tampilModalUbah').on('click', function() {

        $('#judulModal').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah')

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(result, status, xhr) {

                $('#id').val(result.id);
                $('#nama').val(result.nama);
                $('#nrp').val(result.nrp);
                $('#email').val(result.email);
                $('#jurusan').val(result.jurusan);

            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    });

});