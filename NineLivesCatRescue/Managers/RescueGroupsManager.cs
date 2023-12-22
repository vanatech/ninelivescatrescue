using System.Text.Json;
using NineLivesCatRescueLibrary.ApiClients;
using NineLivesCatRescueLibrary.Models;

namespace NineLivesCatRescue.Managers;

public class RescueGroupsManager
{
    private RescueGroupsApiClient _rescueGroupsApiClient;
    
    public RescueGroupsManager(RescueGroupsApiClient rescueGroupsApiClient)
    {
        _rescueGroupsApiClient = rescueGroupsApiClient;
    }

    public async Task<string> GetFeaturedCats()
    {
        IList<CatModel> cats = new List<CatModel>();
        var result = await _rescueGroupsApiClient.GetAvailableAnimalsAsync().ConfigureAwait(false);
        
        var currentAvailableCats = result.Data;
        var includedPictures = result.Included.Where(x => x.Type == "pictures").ToList();

        string imageUrl = "";

        foreach (var animal in currentAvailableCats)
        {
            if (animal.Relationships == null || animal.Relationships.Pictures == null)
            {
                imageUrl = "https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s8916nwf3l60z82l.jpg";
            }
            else
            {
                var animalPictures = animal.Relationships.Pictures.Data.Select(x => x.Id);

                var pictures = includedPictures.Where(x => animalPictures.Contains(x.Id));

                var currentPicture = pictures.FirstOrDefault(x => x.Attributes.Order == 1);
                
                imageUrl = currentPicture.Attributes.Original.Url;
                
                CatModel cat = new()
                {
                    Data = animal,
                    Pictures = pictures,
                    PrimaryPictureUrl = pictures.FirstOrDefault(x => x.Attributes.Order == 1).Attributes.Original.Url
                };
                
                cats.Add(cat);
            }
        }

        var test = cats.Where(x=> x.Data.Attributes.Name != "Barn cats" && x.Data.Attributes.Name != "Expert Mouser")
            .OrderBy(x => x.Data.Attributes.AvailableDate)
            .Take(3)
            .ToArray();
        
        string testArray = JsonSerializer.Serialize(test);
        return testArray;
    }
    
    public async Task<string> GetAvailableCatsByFilter()
    {
        IList<CatModel> cats = new List<CatModel>();
        IEnumerable<IncludedModel> pictures = new List<IncludedModel>();
        var result = await _rescueGroupsApiClient.GetAvailableAnimalsAsync().ConfigureAwait(false);

        var currentAvailableCats = result.Data;
        var includedPictures = result.Included.Where(x => x.Type == "pictures").ToList();

        string imageUrl = "";

        foreach (var animal in currentAvailableCats)
        {
            if (animal.Relationships == null || animal.Relationships.Pictures == null)
            {
                imageUrl = "https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s8916nwf3l60z82l.jpg";
            }
            else
            {
                var animalPictures = animal.Relationships.Pictures.Data.Select(x => x.Id);

                pictures = includedPictures.Where(x => animalPictures.Contains(x.Id));

                var currentPicture = pictures.FirstOrDefault(x => x.Attributes.Order == 1);
                
                imageUrl = currentPicture.Attributes.Original.Url;
            }
            
            CatModel cat = new()
            {
                Data = animal,
                Pictures = pictures,
                PrimaryPictureUrl = imageUrl
            };
                
            cats.Add(cat);
        }

        var test = cats.Where(x=> x.Data.Attributes.Name != "Barn cats" && x.Data.Attributes.Name != "Expert Mouser").ToArray();
        
        string testArray = JsonSerializer.Serialize(test);
        return testArray;
    }
}