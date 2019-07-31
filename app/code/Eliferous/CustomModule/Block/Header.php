<?php 
namespace Eliferous\CustomModule\Block; 
class Header extends \Magento\Framework\View\Element\Html\Link 
{ 
    protected $_template = ‘Eliferous_CustomModule::link.phtml'; 
     
    public function getHref() { 
        return__( 'customlink'); 
    } 
 
    public function getLabel() { 
        return __('Custom Header Link'); 
    } 
}