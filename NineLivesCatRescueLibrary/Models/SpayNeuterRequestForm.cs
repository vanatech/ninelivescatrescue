using System;
namespace NineLivesCatRescueLibrary.Models
{
    public class SpayNeuterRequestFormModel : ContactInfoModel
    {
        public string formid { get; set; } = "6837";
        public string siteid { get; set; } = "8916";
        public string confirm_js { get; set; } = "Correct";
        public string submitForm { get; set; } = "Submit!";
        public string c { get; set; } = "PTTRDVPP";

        //how many girls/boys to be fixed 
        public string q134513 { get; set; }

        //government assistance?
        public string q102113 { get; set; }

        //undertand carrier instructions
        public string q103545 { get; set; }

        //q102133[]
        public HashSet<string> PickupTimesWork { get; set; }

        //comments
        public string q120684 { get; set; }
    }
}