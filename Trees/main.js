var app = angular.module('codecraft', []);



app.controller('TreeDetailController', function ($scope, InformationService) {
	$scope.info = InformationService;
});

app.controller('TreeListController', function ($scope, InformationService) {

	$scope.search = "";
	$scope.order = "common";
	$scope.info = InformationService;

	/*$scope.sensitiveSearch = function (tree) {
		if ($scope.search) {
			return tree.common.indexOf($scope.search) == 0 ||
				tree.species.indexOf($scope.search) == 0;
		}
		return true;
	};*/

});

app.service('InformationService', function () {

	return {
		'addTree': function (tree) {
			this.trees.push(tree);
		},
		'selectedTree': null,
		'trees': [
			{
				"common": "Eastern Hemlock",
				"species": "Tsuga canadensis",
				"fruit": "Small cones",
				"habitat": "Cool, moist rocky ridges, valleys and ravines, hillsides, and lakeshores",
				"uses": "Tannic acid, boxes and crates",
				"niche": "Shelter and cover for deer, turkey and grouse",
				"image": "http://plants.usda.gov/gallery/large/tsca_002_lhp.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Tsuga_canadensis_range_map_1.png"
				
			},
			{
				"common": "Eastern White Pine",
				"species": "Pinus strobus",
				"fruit": "Cones",
				"habitat": "Grows on a variety of soils from light and sandy to heavily textured",
				"uses": "Boxes, light furniture, screening and windbreaks",
				"niche": "Songbirds, deer and rodents eat the seed",
				"image": "https://www.extension.iastate.edu/forestry/iowa_trees/tree_id_photos/PINE_WHITE_fruit.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Pinus_strobus_range_map_1.png"
			},
			{
				"common": "Flowering Dogwood",
				"species": "Cornus florida",
				"fruit": "Drupe",
				"habitat": "Abundant in temperature-consistent woodlands with moist soil",
				"uses": "ornamental, weaving shuttles",
				"niche": "Soil improver due to rate of leaf composition. High fat and calcium content make fruit an important food source for many birds and mammals",
				"image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Benthamidia_florida_berry.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cornus_florida_range_map_1.png"
			},
			{
				"common": "Sugar Maple",
				"species": "Acer saccharum",
				"fruit": "Samara",
				"habitat": " Rich, mesic woods but also grows in drier upland woods",
				"uses": "Maple syrup, furniture, tool handles, colorful ornamental for autumn",
				"niche": "Deer, moose, and snowshoe hare commonly browse sugar maple. Red squirrel, gray squirrel, and flying squirrels feed on the seeds, buds, twigs, and leaves. Porcupines consume the bark and can girdle the upper stem.",
				"image": "https://facultystaff.richmond.edu/~jhayden/landscape_plants/Early%20Fall%20Woody%20Plants/acer_saccharum_cv_bonfire_MAD-ARB_01s.JPG",
				"range": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Acer_saccharum_range_map_1.png"
			},
			{
				"common": "Green Ash",
				"species": "Fraxinus pennsylvaticus",
				"fruit": "Samara",
				"habitat": "Prefers moist to waterlogged soil and is tolerant of shade",
				"uses": "Baseball bats, furniture and windbreaks",
				"niche": "Rabitts and songbirds browse fruits and seed",
				"image": "http://www.carolinanature.com/trees/frpe90812.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/4/41/Fraxinus_pennsylvanica_range_map_3.png"
			},
			{
				"common": "Sassafras",
				"species": "Sassafras albidum",
				"fruit": "Fruit",
				"habitat": "Pioneer tree on disturbed sites, forms colonies",
				"uses": "Tea, essential oil, soap",
				"niche": "Host plant for butterflies, fruit and bark an important food source for many birds and mamals",
				"image": "http://www.carolinanature.com/trees/saal1170647.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/7/70/Sassafras_albidum_range_map.jpg"
			},
			{
				"common": "American Beech",
				"species": "Fagus grandifolia",
				"fruit": "Nut",
				"habitat": "Shade tolerant tree of moist, but well-drained woodlands",
				"uses": "Flooring, furniture, containers",
				"niche": "Mast is important food source for many birds and mammals",
				"image": "https://collections.nmnh.si.edu/search/botany/search.php?action=10&height=310&width=246&irn=10287771",
				"range": "https://upload.wikimedia.org/wikipedia/commons/5/55/Fagus_grandifolia_range_map_1.png"
			},
			{
				"common": "White Oak",
				"species": "Quercus alba",
				"fruit": "Acorn",
				"habitat": "Heavy well-drained soils on north or east facing slopes",
				"uses": "Flooring, interior woodwork, ornamental shade",
				"niche": "deer, bearAcorns are eaten by squirrels, blue jays, crows, red-headed woodpeckers, deer, turkey, quail, mice, chipmunks, ducks and raccoons",
				"image": "https://images4-e.ravelrycache.com/uploads/renatabrenner/92540683/white_oak2_medium.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/0/07/Quercus_alba_range_map_1.png"
			},
			{
				"common": "Black Walnut",
				"species": "Juglans nigra",
				"fruit": "Nut",
				"habitat": "Resists competition from other plants in fields and open woodlands via secretion of juglone",
				"uses": "Nuts, furniture, gunstocks and musical instruments",
				"niche": "Squirrels, turkeys, raccoons and bear eat the nuts",
				"image": "https://altnature.com/herb-pictures/images/black-walnut.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Juglans_nigra_range_map_1.png"
			},
			{
				"common": "Red Maple",
				"species": "Acer rubrum",
				"fruit": "samara",
				"habitat": "Supergeneralist, thus can become invasive, especially in waterlogged soils",
				"uses": "Many uses, including flooring, furniture and fuel",
				"niche": "Young trees are heavily browsed by deer and rabbits, with rodents consuming the seeds",
				"image": "http://www.wooddomain.com/images/trees/red-maple-tree/red-maple-tree-leaves-and-seeds.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/4/42/Acer_rubrum_range_map.png"
			},
			{
				"common": "Black Cherry",
				"species": "Prunus serotina",
				"fruit": "Fruit",
				"habitat": "Shade-intolerant pioneer species of abandoned land",
				"uses": "Valuable cabinet, furniture and veneer wood, as well as reclamation of surface mining spoil sites",
				"niche": "Fruits are important late summer food source for many birds and mammals",
				"image": "http://www.nrca-railroad.com/wp-content/uploads/2012/01/black-cherry-leaf.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Prunus_serotina_range_map_1.png"
			},
			{
				"common": "Cucumber Magnolia",
				"species": "Magnolia acuminata",
				"fruit": "Fruit",
				"habitat": "Prefer deep, moist, well-drained and slightly acidic soils",
				"uses": "Ornamental shade tree",
				"niche": "Early summer fruits are eaten by many birds",
				"image": "https://www.uoguelph.ca/arboretum/sites/uoguelph.ca.arboretum/files/public/IMG_1420-cucumbermagnoliabloom-500W.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Magnolia_acuminata_range_map_5.png"
			},
			{
				"common": "Sweet Birch",
				"species": "Betula lenta",
				"fruit": "Fruit",
				"habitat": "Prefers moist, well-drained soils but is also found on a variety of less favorable sites with rocky coarse-textured or shallow soils",
				"uses": "Furniture, cabinets, boxes, woodenware, handles, and millwork, birch oil (wintergreen)",
				"niche": "Important host plant for moth and butterfly caterpillars",
				"image": "http://bugwoodcloud.org/images/3072x2048/5444940.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Betula_lenta_range_map_1.png"
			},
			{
				"common": "Basswood",
				"species": "Tilia americana",
				"fruit": "Fruit",
				"habitat": "Prefers rich, mesic, well-drained soils",
				"uses": "Basswood is said to be a soil-enriching species, bringing calcium and magnesium up from deep in the soil profile and depositing it in leaf litter",
				"niche": "Spring buds are important for birds and deer in winter. Fruits are eaten by birds and small mammals. The wood decays easily and produces many cavities which are used by cavity-nesting animals (wood ducks, pileated woodpeckers, other birds, and small mammals). Basswood is a prolific nectar producer and pollination by honeybees results in a choice grade of honey.",
				"image": "http://sites.ipfw.edu/native-trees/images/BasswoodSmall.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Tlilia_americana_map.png"
			},
			{
				"common": "Red Mulberry",
				"species": "Morus rubra",
				"fruit": "Aggregate fruit",
				"habitat": "Found in floodplains, river valleys, and moist hillsides in soils that are high in organic matter",
				"uses": "Fenceposts and locally made jams and baked goods",
				"niche": "Many species of birds and mammals eat the juicy fruits",
				"image": "https://upload.wikimedia.org/wikipedia/commons/7/78/Morus_alba_Tbilisi.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Morus_rubra_range.png"
			},
			{
				"common": "Sycamore",
				"species": "Platanus occidentalis",
				"fruit": "Seed",
				"habitat": "A tree of bottomland and alluvial soils in a wide range of soil types.  Very tolerant of saturated soils",
				"uses": "Pulp for paper and particleboard, wood for butcher's blocks",
				"niche": "Host plant for many insect species, seeds are  food for overwintering songbirds",
				"image": "http://www.backyardnature.net/n/12/121104sy.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Platanus_occidentalis_map.png"
			},
			{
				"common": "Tuliptree",
				"species": "Liriodendron tulipifera",
				"fruit": "Seed",
				"habitat": "Tolerant of wide conditions, a very fast growing tree that outcompetes other species",
				"uses": "Furniture, veneer and pulpwood",
				"niche": "Important host plant for moth and butterfly caterpillars, seeds provide food for squirrels in the late fall and winter months, and deer often browse on the twigs of saplings.",
				"image": "https://s3.amazonaws.com/test.classconnection/458/flashcards/466458/jpg/tulip_tree_3.jpg",
				"range": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Liriodendron_tulipifera_range_map_3.png"
			},
			{
				"common": "Shagbark Hickory",
				"species": "Carya ovata",
				"fruit": "Nut",
				"habitat": "Tolerant of a range of conditions and soil types",
				"uses": "Hickory wood for charcoal, nuts for eating, wood for tools requiring strength",
				"niche": "Many species of mammal and larger birds (mallards, wood ducks, turkey) rely on hickory nuts for food",
				"image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Hickory_nuts_6060.JPG",
				"range": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Carya_ovata_range_map_1.png"
			},
		]

	};

});