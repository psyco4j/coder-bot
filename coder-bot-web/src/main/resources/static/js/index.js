/**
 * Created by lipeng on 15/10/4.
 */

var psyco = {
    util: {
        json2array: function (json) {
            var re = [];
            _.each(json, function (obj, n) {
                re.push({name: n, data: obj});
            });
            return re;
        }
    },
    languages: {
        Java: {
            bean: {
                'image-url': '../static/worthy/images/portfolio-3.jpg',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.'
            },
            mybatis: {
                'image-url': '../static/worthy/images/portfolio-6.jpg',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.'
            }
        },
        Html: {
            bean: {
                'image-url': '../static/worthy/images/portfolio-3.jpg',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.'
            },
            mybatis: {
                'image-url': '../static/worthy/images/portfolio-6.jpg',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.'
            }
        },
        Scala: {
            bean: {
                'image-url': '../static/worthy/images/portfolio-3.jpg',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.'
            },
            mybatis: {
                'image-url': '../static/worthy/images/portfolio-6.jpg',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.'
            }
        },
    }
    //,
    //languages: [
    //    {
    //        name: 'java',
    //        modules: [
    //            {
    //                'name': 'bean',
    //                'image-url': '../static/worthy/images/portfolio-3.jpg',
    //                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.'
    //            },
    //            {
    //                'name': 'mybatis',
    //                'image-url': '../static/worthy/images/portfolio-6.jpg',
    //                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.'
    //            }]
    //    }
    //]

};

$(document).ready(function () {
    var lan = [];
    _.each(psyco.languages, function (modules, lanName) {
        _.each(modules, function (module, moduleName) {
            lan.push({
                'name': moduleName,
                'type': lanName,
                'image-url': module['image-url'],
                'description': module['description']

            });
        });
    });
    console.log(lan);
    ko.applyBindings({
        koLanguages: ko.observable(lan)
    });

});