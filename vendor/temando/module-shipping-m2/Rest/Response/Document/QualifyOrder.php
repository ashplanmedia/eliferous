<?php
/**
 * Refer to LICENSE.txt distributed with the Temando Shipping module for notice of license
 */
namespace Temando\Shipping\Rest\Response\Document;

use Temando\Shipping\Rest\Response\DataObject\Order;

/**
 * Temando API Qualify Order Document
 *
 * @package Temando\Shipping\Rest
 * @author  Christoph Aßmann <christoph.assmann@netresearch.de>
 * @license https://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
 * @link    https://www.temando.com/
 */
class QualifyOrder implements QualifyOrderInterface
{
    /**
     * @var \Temando\Shipping\Rest\Response\DataObject\Order
     */
    private $order;

    /**
     * @var \Temando\Shipping\Rest\Response\DataObject\OrderQualification[]
     */
    private $included;

    /**
     * @return \Temando\Shipping\Rest\Response\DataObject\Order
     */
    public function getData()
    {
        return $this->order;
    }

    /**
     * @param \Temando\Shipping\Rest\Response\DataObject\Order $order
     * @return void
     */
    public function setData(Order $order)
    {
        $this->order = $order;
    }

    /**
     * @return \Temando\Shipping\Rest\Response\DataObject\OrderQualification[]
     */
    public function getIncluded()
    {
        return $this->included;
    }

    /**
     * @param \Temando\Shipping\Rest\Response\DataObject\OrderQualification[] $included
     * @return void
     */
    public function setIncluded(array $included)
    {
        $this->included = $included;
    }
}
