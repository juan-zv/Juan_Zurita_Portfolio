import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("income.csv")

# Print the column names
column_names = df.columns.tolist()
print(column_names)

print("\n----------------------------------------------------------------------------------- \n")

# Set max columns to show all columns in the head() method
pd.set_option('display.max_columns', None)
print(df.head())

print("\n----------------------------------------------------------------------------------- \n")

# Plot a bar chart of the count by native country
native_country_counts = df['native.country'].value_counts().head(10)
plt.bar(native_country_counts.index, native_country_counts.values)
plt.xlabel('Native Country')
plt.ylabel('Count')
plt.title('Top 10 Native Countries')
plt.xticks(rotation=45)
plt.show()

print("\n----------------------------------------------------------------------------------- \n")

# Filter by if they make more than 50K and show the new DataFrame
filtered_df = df[df['income'] == '>50K']
print(filtered_df)

# Calculate the average age from the filtered DataFrame
average_age = filtered_df['age'].mean()
print(f"{average_age:.2f}")

# Calculate the average native country from the filtered DataFrame
average_country = filtered_df['native.country'].mode().values[0]
print(average_country)

print("\n----------------------------------------------------------------------------------- \n")

# Filter by native country Peru
filtered_df_Peru = df[df['native.country'] == 'Peru']
print(filtered_df_Peru.head())

# Calculate the average age
average_age_Peru = filtered_df_Peru['age'].mean()
print(average_age_Peru)

# Count the number of individuals with income >$50K and <=$50K
num_greater_50k_Peru = filtered_df_Peru[filtered_df_Peru['income'] == '>50K'].shape[0]
num_less_equal_50k_Peru = filtered_df_Peru[filtered_df_Peru['income'] == '<=50K'].shape[0]
print(num_greater_50k_Peru, num_less_equal_50k_Peru)

print("\n----------------------------------------------------------------------------------- \n")

# Group the data by native country and income, and count the occurrences
grouped_df = df[df['income'] == '>50K'].groupby('native.country').size().sort_values(ascending=False)

# Get the top countries with the highest count
top_countries = grouped_df.head(5)

# Reverse the order to have the highest count on top
top_countries = top_countries[::-1]

# Plot the horizontal bar chart
plt.barh(top_countries.index, top_countries.values)
plt.xlabel('Number of People')
plt.ylabel('Native Country')
plt.title('Top Countries with Highest Number of People Earning >$50K')

plt.show()