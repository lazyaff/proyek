<?php 

$string = "<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/* 
 * Pagination Config Bootstrap 3 CSS Style
 * harviacode.com
 */

\$config['query_string_segment'] = 'start';

\$config['full_tag_open'] = '<nav class=\"d-flex justify-content-center\"><ul class=\"pagination\">';
\$config['full_tag_close'] = '</ul></nav>';

\$config['first_link'] = 'First';
\$config['first_tag_open'] = '<li class=\"page-item page-link\">';
\$config['first_tag_close'] = '</li>';

\$config['last_link'] = 'Last';
\$config['last_tag_open'] = '<li class=\"page-item page-link\">';
\$config['last_tag_close'] = '</li>';

\$config['next_link'] = 'Next';
\$config['next_tag_open'] = '<li class=\"page-item page-link\">';
\$config['next_tag_close'] = '</li>';

\$config['prev_link'] = 'Prev';
\$config['prev_tag_open'] = '<li class=\"page-item page-link\">';
\$config['prev_tag_close'] = '</li>';

\$config['cur_tag_open'] = '<li class=\"page-item active\"><a class=\"page-link\">';
\$config['cur_tag_close'] = '</a></li>';

\$config['num_tag_open'] = '<li class=\"page-item page-link\">';
\$config['num_tag_close'] = '</li>';


/* End of file pagination.php */
/* Location: ./application/config/pagination.php */
/* Please DO NOT modify this information : */
/* Generated by Harviacode Codeigniter CRUD Generator ".date('Y-m-d H:i:s')." */
/* http://harviacode.com */";



$hasil_config_pagination = createFile($string, $target."config/pagination.php");

?>