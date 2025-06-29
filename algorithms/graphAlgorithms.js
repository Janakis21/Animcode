const graphAlgorithms = {
    "DFS": {
        "Python": `def dfs(graph, node, visited):
    if node not in visited:
        print(node)
        visited.add(node)
        for neighbor in graph[node]:
            dfs(graph, neighbor, visited)`,
        "C": `void dfs(int graph[MAX][MAX], int visited[], int node, int n) {
    visited[node] = 1;
    printf("%d ", node);
    for (int i = 0; i < n; i++) {
        if (graph[node][i] && !visited[i])
            dfs(graph, visited, i, n);
    }
}`,
        "C++": `void dfs(vector<vector<int>>& graph, vector<bool>& visited, int node) {
    visited[node] = true;
    cout << node << " ";
    for (int neighbor : graph[node]) {
        if (!visited[neighbor])
            dfs(graph, visited, neighbor);
    }
}`,
        "Java": `void dfs(int[][] graph, boolean[] visited, int node) {
    visited[node] = true;
    System.out.print(node + " ");
    for (int i = 0; i < graph[node].length; i++) {
        if (graph[node][i] == 1 && !visited[i]) {
            dfs(graph, visited, i);
        }
    }
}`
    },

    "BFS": {
        "Python": `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    while queue:
        node = queue.popleft()
        if node not in visited:
            print(node)
            visited.add(node)
            queue.extend(neighbor for neighbor in graph[node] if neighbor not in visited)`,
        "C": `void bfs(int graph[MAX][MAX], int start, int n) {
    int visited[MAX] = {0};
    int queue[MAX], front = 0, rear = -1;
    visited[start] = 1;
    queue[++rear] = start;

    while (front <= rear) {
        int node = queue[front++];
        printf("%d ", node);
        for (int i = 0; i < n; i++) {
            if (graph[node][i] && !visited[i]) {
                visited[i] = 1;
                queue[++rear] = i;
            }
        }
    }
}`,
        "C++": `void bfs(vector<vector<int>>& graph, int start) {
    vector<bool> visited(graph.size(), false);
    queue<int> q;
    q.push(start);
    visited[start] = true;

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";

        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}`,
        "Java": `void bfs(int[][] graph, int start) {
    boolean[] visited = new boolean[graph.length];
    Queue<Integer> queue = new LinkedList<>();
    visited[start] = true;
    queue.add(start);

    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.print(node + " ");

        for (int i = 0; i < graph[node].length; i++) {
            if (graph[node][i] == 1 && !visited[i]) {
                visited[i] = true;
                queue.add(i);
            }
        }
    }
}`
    },

    "Dijkstra": {
        "Python": `import heapq

def dijkstra(graph, start):
    heap = [(0, start)]
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0

    while heap:
        current_distance, current_node = heapq.heappop(heap)

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))

    return distances`,
        "C": `int min_distance(int dist[], int spt_set[], int n) {
    int min = INT_MAX, min_index;
    for (int v = 0; v < n; v++)
        if (spt_set[v] == 0 && dist[v] <= min)
            min = dist[v], min_index = v;
    return min_index;
}

void dijkstra(int graph[MAX][MAX], int n, int start) {
    int dist[MAX], spt_set[MAX];
    for (int i = 0; i < n; i++) {
        dist[i] = INT_MAX;
        spt_set[i] = 0;
    }
    dist[start] = 0;

    for (int count = 0; count < n - 1; count++) {
        int u = min_distance(dist, spt_set, n);
        spt_set[u] = 1;

        for (int v = 0; v < n; v++)
            if (!spt_set[v] && graph[u][v] && dist[u] != INT_MAX && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }
}`,
        "C++": `vector<int> dijkstra(vector<vector<int>>& graph, int start) {
    int n = graph.size();
    vector<int> dist(n, INT_MAX);
    dist[start] = 0;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, start});

    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();

        for (int v = 0; v < n; v++) {
            if (graph[u][v] && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`,
        "Java": `int minDistance(int dist[], boolean sptSet[]) {
    int min = Integer.MAX_VALUE, minIndex = -1;
    for (int v = 0; v < dist.length; v++)
        if (!sptSet[v] && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    return minIndex;
}

void dijkstra(int graph[][], int n, int start) {
    int dist[] = new int[n];
    boolean sptSet[] = new boolean[n];

    for (int i = 0; i < n; i++) {
        dist[i] = Integer.MAX_VALUE;
        sptSet[i] = false;
    }
    dist[start] = 0;

    for (int count = 0; count < n - 1; count++) {
        int u = minDistance(dist, sptSet);
        sptSet[u] = true;

        for (int v = 0; v < n; v++)
            if (!sptSet[v] && graph[u][v] != 0 && dist[u] != Integer.MAX_VALUE && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }
}`
    }
};
