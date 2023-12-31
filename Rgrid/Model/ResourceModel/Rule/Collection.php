<?php
/**
 * @author Amasty Team
 * @copyright Copyright (c) Amasty (https://www.amasty.com)
 * @package Promotions Manager for Magento 2
 */

namespace Amasty\Rgrid\Model\ResourceModel\Rule;

use Magento\SalesRule\Model\ResourceModel\Rule\Collection as RuleCollection;
use Magento\SalesRule\Model\Data\Rule;

class Collection extends RuleCollection
{
    public const PAGE_SIZE = 1;

    /**
     * @param string $direction
     *
     * @return string
     */
    public function getSortOrder($direction = self::SORT_ORDER_DESC)
    {
        return $this->setOrder(Rule::KEY_SORT_ORDER, $direction)
            ->setPageSize(self::PAGE_SIZE)
            ->getFirstItem()
            ->getSortOrder();
    }
}
