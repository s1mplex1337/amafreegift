define(
    [
        'Magento_Customer/js/customer-data',
        'underscore',
        'knockout'
    ],
    function (customerData, _, ko) {
        'use strict';

        /**
         * @deprecated the mixin cause support. Move to independent component.
         */
        var mixin = _.extend({
            notificationSectionName: 'ammessages',
            messagesObserver: {},
            staticMessages: {},
            initialize: function () {
                this._super();
                if (window.amasty_notice_disabled) {
                    return;
                }
                this.staticMessages = customerData.get(this.notificationSectionName);
                this.messagesObserver = this.messages;
                this.messages = ko.pureComputed(this.messagesMerger, this);
            },

            /**
             * Merge dynamic and static messages.
             *
             * @return {object}
             */
            messagesMerger: function () {
                var messagesArr = this.messagesObserver(),
                    staticMessages = this.staticMessages(),
                    isAdded = false,
                    cartFromCustomerData = customerData.get('cart')();

                if (_.isUndefined(messagesArr.messages)) {
                    messagesArr.messages = [];
                }
                if (_.isUndefined(staticMessages.messages)) {
                    return messagesArr;
                }
                if (_.isUndefined(window.checkout)){
                    return messagesArr;
                }

                if (_.isUndefined(cartFromCustomerData.items) || cartFromCustomerData.items.length === 0){
                    return messagesArr;
                }

                if (this.isSectionInvalid(staticMessages)) {
                    customerData.reload([this.notificationSectionName], true);
                } else {
                    _.each(messagesArr.messages, function (message) {
                        if (_.isEqual(message, staticMessages.messages.notice)) {
                            isAdded = true;
                        }
                    });

                    if (!isAdded && staticMessages.messages.notice) {
                        messagesArr.messages.push(staticMessages.messages.notice);
                    }
                }

                return messagesArr;
            },

            /**
             * Is current store view aren't the same as a message store view.
             * window.checkout - minicart configuration, should be available on any frontend page but checkout
             *
             * @param {Object} staticMessages
             * @return {boolean}
             */
            isSectionInvalid: function (staticMessages) {
                return !_.isUndefined(window.checkout.websiteId)
                    && !_.isUndefined(staticMessages.website_id)
                    && staticMessages.website_id !== window.checkout.websiteId
                    || !_.isUndefined(window.checkout.storeId)
                    && !_.isUndefined(staticMessages.store_id)
                    && staticMessages.store_id !== window.checkout.storeId;
            }
        });

        return function (target) {
            return target.extend(mixin);
        };
    }
);
