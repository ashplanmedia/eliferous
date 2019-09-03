<?php
namespace Lillik\PriceDecimal\Model\Currency;

/**
 * Interceptor class for @see \Lillik\PriceDecimal\Model\Currency
 */
class Interceptor extends \Lillik\PriceDecimal\Model\Currency implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Framework\App\CacheInterface $appCache, \Lillik\PriceDecimal\Model\ConfigInterface $moduleConfig, $options = null, $locale = null)
    {
        $this->___init();
        parent::__construct($appCache, $moduleConfig, $options, $locale);
    }

    /**
     * {@inheritdoc}
     */
    public function toCurrency($value = null, array $options = [])
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'toCurrency');
        if (!$pluginInfo) {
            return parent::toCurrency($value, $options);
        } else {
            return $this->___callPlugins('toCurrency', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function setFormat(array $options = [])
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setFormat');
        if (!$pluginInfo) {
            return parent::setFormat($options);
        } else {
            return $this->___callPlugins('setFormat', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getSymbol($currency = null, $locale = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getSymbol');
        if (!$pluginInfo) {
            return parent::getSymbol($currency, $locale);
        } else {
            return $this->___callPlugins('getSymbol', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getShortName($currency = null, $locale = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getShortName');
        if (!$pluginInfo) {
            return parent::getShortName($currency, $locale);
        } else {
            return $this->___callPlugins('getShortName', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getName($currency = null, $locale = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getName');
        if (!$pluginInfo) {
            return parent::getName($currency, $locale);
        } else {
            return $this->___callPlugins('getName', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getRegionList($currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getRegionList');
        if (!$pluginInfo) {
            return parent::getRegionList($currency);
        } else {
            return $this->___callPlugins('getRegionList', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getCurrencyList($region = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getCurrencyList');
        if (!$pluginInfo) {
            return parent::getCurrencyList($region);
        } else {
            return $this->___callPlugins('getCurrencyList', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function toString()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'toString');
        if (!$pluginInfo) {
            return parent::toString();
        } else {
            return $this->___callPlugins('toString', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function __toString()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, '__toString');
        if (!$pluginInfo) {
            return parent::__toString();
        } else {
            return $this->___callPlugins('__toString', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function setLocale($locale = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setLocale');
        if (!$pluginInfo) {
            return parent::setLocale($locale);
        } else {
            return $this->___callPlugins('setLocale', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getLocale()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getLocale');
        if (!$pluginInfo) {
            return parent::getLocale();
        } else {
            return $this->___callPlugins('getLocale', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getValue()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getValue');
        if (!$pluginInfo) {
            return parent::getValue();
        } else {
            return $this->___callPlugins('getValue', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function setValue($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setValue');
        if (!$pluginInfo) {
            return parent::setValue($value, $currency);
        } else {
            return $this->___callPlugins('setValue', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function add($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'add');
        if (!$pluginInfo) {
            return parent::add($value, $currency);
        } else {
            return $this->___callPlugins('add', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function sub($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'sub');
        if (!$pluginInfo) {
            return parent::sub($value, $currency);
        } else {
            return $this->___callPlugins('sub', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function div($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'div');
        if (!$pluginInfo) {
            return parent::div($value, $currency);
        } else {
            return $this->___callPlugins('div', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function mul($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'mul');
        if (!$pluginInfo) {
            return parent::mul($value, $currency);
        } else {
            return $this->___callPlugins('mul', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function mod($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'mod');
        if (!$pluginInfo) {
            return parent::mod($value, $currency);
        } else {
            return $this->___callPlugins('mod', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function compare($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'compare');
        if (!$pluginInfo) {
            return parent::compare($value, $currency);
        } else {
            return $this->___callPlugins('compare', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function equals($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'equals');
        if (!$pluginInfo) {
            return parent::equals($value, $currency);
        } else {
            return $this->___callPlugins('equals', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function isMore($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'isMore');
        if (!$pluginInfo) {
            return parent::isMore($value, $currency);
        } else {
            return $this->___callPlugins('isMore', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function isLess($value, $currency = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'isLess');
        if (!$pluginInfo) {
            return parent::isLess($value, $currency);
        } else {
            return $this->___callPlugins('isLess', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getService()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getService');
        if (!$pluginInfo) {
            return parent::getService();
        } else {
            return $this->___callPlugins('getService', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function setService($service)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setService');
        if (!$pluginInfo) {
            return parent::setService($service);
        } else {
            return $this->___callPlugins('setService', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getConfig()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getConfig');
        if (!$pluginInfo) {
            return parent::getConfig();
        } else {
            return $this->___callPlugins('getConfig', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getPricePrecision()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getPricePrecision');
        if (!$pluginInfo) {
            return parent::getPricePrecision();
        } else {
            return $this->___callPlugins('getPricePrecision', func_get_args(), $pluginInfo);
        }
    }
}
