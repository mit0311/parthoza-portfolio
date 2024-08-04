def firstOccurrence(A, B):
    len_a = len(A)
    len_b = len(B)
    
    # Precompute the positions of each character in A
    from collections import defaultdict
    index_map = defaultdict(list)
    for i, char in enumerate(A):
        index_map[char].append(i)
    
    # Helper function to check if B is a subsequence of A starting from a specific index
    def is_subsequence(A, B, index_map):
        current_pos = -1
        for char in B:
            # Find the smallest index greater than current_pos
            if char not in index_map:
                return -1
            idx_list = index_map[char]
            left, right = 0, len(idx_list) - 1
            while left <= right:
                mid = (left + right) // 2
                if idx_list[mid] > current_pos:
                    right = mid - 1
                else:
                    left = mid + 1
            if left == len(idx_list):
                return -1
            current_pos = idx_list[left]
        return current_pos
    
    # Check if B is a subsequence of A without changes
    result = is_subsequence(A, B, index_map)
    if result != -1:
        return result - len_b + 1 + 1
    
    # Check with one character change in B (except the first character)
    for i in range(1, len_b):
        original_char = B[i]
        for char in 'abcdefghijklmnopqrstuvwxyz':
            if char != original_char:
                modified_B = B[:i] + char + B[i+1:]
                result = is_subsequence(A, modified_B, index_map)
                if result != -1:
                    return result - len_b + 1 + 1
    
    return -1

# Read input
t = int(input().strip())
for _ in range(t):
    A = input().strip()
    B = input().strip()
    print(firstOccurrence(A, B))
