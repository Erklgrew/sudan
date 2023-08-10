

var config = {
    style: 'mapbox://styles/erikrenglish/clin0jzwi00nf01r0cn1a8hsn',
    accessToken: 'pk.eyJ1IjoiZXJpa3JlbmdsaXNoIiwiYSI6ImNqNXdnZDdnNTBlMDcyd3FzNHg5YjNsN3kifQ.kDgqHDJ00xCjvUXy8x57UA',
    showMarkers: false,
    markerColor: 'purple',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    projection: 'globe',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'sud-1',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Political violence',
            image: '',
          caption: '',
            description: 
'The SAF and RSF have been fighting since April 15th.',
          location: {
                center: [29.76770, 15.50109],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'acled', 
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'acled',
                     opacity: 0,
                 }
            ]
        },
      {
            id: 'sud-2',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Internally displaced persons',
            image: '',
          caption: '',
            description: 
'Since then, more than 1.2 million Sudanese have been internally displaced and four hundred thousand have fled the country to claim asylum as refugees, 50% of whom are children.',
          location: {
                center: [29.76770, 15.50109],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'displaced', 
                     opacity: 0.6,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'displaced',
                     opacity: 0,
                 }
            ]
        },{
            id: 'sud-3',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Food insecurity',
            image: '',
          caption: '',
            description: 
'Food insecurity in Sudan has worsened and refugee flows throughout the region risk exacerbating pre-existing crises.',
          location: {
                center: [29.76770, 15.50109],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'fews-may', 
                     opacity: 0.8,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'fews-may',
                     opacity: 0,
                 }
            ]
        },
    ]
};
