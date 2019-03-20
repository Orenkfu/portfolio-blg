
/**
 * 
 * @param {String} code 
 * @param {String} conversionID 
 * @param {String} elementToChangeID 
 * @param {Array} variants 
 */
function runABTest(code) {
        let abtestData = JSON.parse(localStorage.getItem('abtest'));
        let conversionID = abtestData.conversionID;
        let elementToChangeID = abtestData.variantID;
        let variants = abtestData.variants;
        console.log(abtestData);
        console.log(variants);
        let currentVariant;


        const getLeadingVariant = () => {
            let sortedVars = variants.sort((a, b) => {
                return b.getRatio() - a.getRatio();
            })
            console.log(sortedVars[0]);
            return sortedVars[0];
        }
        const setLeadingVariant = (variant) => {
            variant.style.backgroundColor = currentVariant.color;
        }
        const storeVariants = () => {
            localStorage.setItem('variants', variants);
        }
        const loadVariants = () => {
            let vars = localStorage.getItem('variants');
            if (vars) return vars;
            return variants.map(variant => {
                return {
                    color: variant,
                    views: 1,
                    conversions: 1,
                    getRatio: function () {
                        return this.conversions / this.views;
                    }

                }
            })
        }
        document.addEventListener('DOMContentLoaded', () => {
            let convertElement = document.getElementById(conversionID);
            let variantElement = document.getElementById(elementToChangeID);
            variants = loadVariants();
            currentVariant = getLeadingVariant();
            setLeadingVariant(variantElement);
            convertElement.addEventListener('click', () => {
                currentVariant.conversions++;
            });

            setInterval(() => {
                currentVariant.views++;
                storeVariants;
            }, 2000);
            setInterval(() => {
                if (Math.round(Math.random() * 100) < 10) {
                    currentVariant = variants[Math.round(Math.random() * (variants.length - 1))];
                    setLeadingVariant(variantElement);
                    console.log('Current Variant chosen randomly!', currentVariant);
                } else {
                    currentVariant = getLeadingVariant();
                    console.log(currentVariant);
                    setLeadingVariant(variantElement);
                }
            }, 1000);

        })
    
}