/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
int answer(int n, int k, vector<int> arr){
    if(k==1){
        int max_e=-1;
        int index=-1;
        for(int i=0; i<n; i++){
            if(max_e<=arr[i]){
                max_e=arr[i];
                index=i;
            }
        }
        if(index==0){
            return max_e+arr[n-1];
        }
        else if(index==n-1){
            return max_e+arr[0];
        }
        else{
            return max_e+max(arr[0]+arr[n-1]);
        }
    }
    sort(arr.begin(), arr.end());
    int sum=0;
    for(int i=n-1; i>=n-k-1; i--){
        sum+=arr[i];
    }
    return sum;
}

int main()
{
    cin>>t;
    int n;
    int k;
    for(int i=0; i<t; i++){
        cin>>n;
        cin>>k;
        vector<int> arr(n,0);
        int x;
        for(int i=0; i<n; i++){
            cin>>x;
            arr[i]=x;
        }
        cout<<answer(n,k,arr);
    }
    for(int i=0; i<t; i++){
        
    }

    return 0;
}