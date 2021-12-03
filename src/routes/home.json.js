export async function get() {
   
    const data = `<div id="lipsum">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tempus enim. Donec tincidunt lacus nisl, eget tincidunt quam scelerisque id. Pellentesque non cursus velit. Curabitur non urna ultrices, egestas magna quis, fringilla enim. Aenean imperdiet mollis congue. Curabitur tempus sem id nulla fermentum consectetur. Donec non eros ac tortor facilisis efficitur. Sed lacinia a ligula sed maximus. In vitae egestas tellus. Proin aliquam odio in sollicitudin hendrerit. Aenean libero mi, mollis nec maximus non, vulputate at ante. Sed vestibulum nisi arcu.
    </p>
    <p>
    Nunc ac ligula tortor. Fusce tempus dictum luctus. Vestibulum nunc felis, suscipit vel commodo eu, tristique eget urna. Morbi scelerisque vehicula ligula venenatis imperdiet. Vestibulum ex arcu, facilisis nec lacus at, finibus pellentesque dolor. Maecenas leo nulla, bibendum at sem quis, consequat sagittis ligula. Mauris porttitor, felis vel volutpat gravida, leo magna auctor nulla, non sodales tortor enim eu velit. Nulla facilisi. Maecenas sit amet mattis sem. Nunc rhoncus imperdiet nisi sed condimentum. Phasellus ac eros arcu. Duis vel massa non sem egestas tincidunt. Morbi interdum sollicitudin finibus. Donec tincidunt sit amet eros id viverra.
    </p>
    <p>
    Cras id leo ut ligula ultricies semper. Suspendisse ultrices tellus risus, nec aliquam erat tempor in. Quisque a sem mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in elit tempor, imperdiet nulla sed, pulvinar est. Praesent facilisis erat a diam ultrices, eu laoreet mi tincidunt. Sed a est a diam euismod dapibus. Etiam id congue arcu. Proin augue est, sollicitudin et efficitur id, sodales quis enim.
    </p>
    <p>
    Cras sollicitudin, eros sit amet tincidunt mollis, ex enim fringilla dolor, in cursus tortor lacus vel leo. Quisque sit amet ex eu lacus semper bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut hendrerit facilisis consequat. Duis et gravida nibh. Nunc sollicitudin hendrerit fermentum. Nulla facilisi. Sed vitae neque neque. Nunc ultrices diam turpis, nec viverra augue semper id. In orci diam, sollicitudin sed nisi sed, facilisis ornare diam. Sed a neque sed nisi laoreet ultricies.
    </p>
    <p>
    Ut lobortis turpis quis erat ultrices volutpat. Vivamus feugiat enim eget viverra consequat. Morbi porta urna et nunc tristique, a molestie nisi consequat. Suspendisse potenti. Fusce elementum enim nibh, ac dapibus sapien maximus a. Sed in erat tempus, suscipit nisl eget, varius lacus. Pellentesque iaculis sed leo ut rhoncus.
    </p></div>`;


    if (data) {
        return {
            headers: {
                "X-Robots-Tag": "noindex"
            },
            body: {
                data
            }
        };
    }
}