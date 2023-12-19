namespace NineLivesCatRescueLibrary.Models;

public class CatModel
{
    public DataModel Data { get; set; }
    public IEnumerable<IncludedModel> Pictures { get; set; }
    public string PrimaryPictureUrl { get; set; }
}